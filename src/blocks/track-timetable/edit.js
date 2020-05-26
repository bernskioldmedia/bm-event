/**
 * External Dependencies
 */
import classnames from 'classnames';
/**
 * Internal Dependencies
 */
import Inspector from './inspector';

/**
 * WordPress Dependencies
 */
const { __ }                        = wp.i18n;
const { apiFetch }                  = wp;
const { withSelect, registerStore } = wp.data;
const { Fragment, Component }       = wp.element;
const { Placeholder, Spinner }      = wp.components;

/**
 * Initial State
 *
 * @type {{events: {}}}
 */
const DEFAULT_STATE = {
	events: {},
};

/**
 * Actions for the selection
 *
 * @type {{setEvents(*): *, receiveEvents(*): *}}
 */
const actions = {
	setEvents( events ) {
		return {
			type: 'SET_EVENTS',
			events,
		};
	},
	receiveEvents( path ) {
		return {
			type: 'RECIEVE_EVENTS',
			path,
		};
	},
};

/**
 * Register custom store for getting and setting the
 * secondary events.
 */
registerStore( 'bm/upcoming-events', {
		reducer( state = DEFAULT_STATE, action ) {

			switch ( action.type ) {
				case 'SET_EVENTS':
					return {
						...state,
						events: action.events,
					};
			}

			return state;

		},

		actions,

		selectors: {
			getEvents( state ) {
				const { events } = state;
				return events;
			}
		},

		controls: {
			RECIEVE_EVENTS( action
			) {
				return apiFetch( { path: action.path } );
			}
		},

		resolvers: {
			* getEvents( params = '' ) {
				const events = yield actions.receiveEvents( '/tribe/events/v1/events' + params );
				return actions.setEvents( events );
			}
		},

	}
);

/**
 * Upcoming Events Block: Edit Logic
 */
class UpcomingEventsEdit extends Component {

	constructor() {
		super( ...arguments );
	}

	/**
	 * Retrieve events from the API via the
	 * withSelect helper.
	 *
	 * @returns {Array}
	 */
	getEvents() {
		const events = this.props.events;

		if ( ! events.events || ! events.events.length ) {
			return [];
		}

		return events.events;
	}

	/**
	 * Render a single event based on the event data.
	 *
	 * @param event
	 * @returns {*}
	 */
	renderEvent( event ) {

		const getDate = () => {
			const startDate = event.start_date_details;
			const endDate   = event.end_date_details;

			if ( ( startDate.month === endDate.month ) && ( startDate.day !== endDate.day ) ) {
				return `${startDate.day}-${endDate.day}/${endDate.month}`;
			} else if ( endDate.day && endDate.month && ( startDate.day !== endDate.day ) ) {
				return `${startDate.day}/${startDate.month} - ${endDate.day}/${endDate.month}`;
			} else {
				return `${startDate.day}/${startDate.month}`;
			}

		};

		return (
			<div className="upcoming-event-item" key={event.id.toString()}>
				<a href="#" className="upcoming-event-item-link">
					<div className="upcoming-event-item-date">
						{getDate()}
					</div>
					<h3 className="upcoming-event-item-title">
						{event.title}
					</h3>
				</a>
			</div>
		);

	}

	/**
	 * Map the render event function to the list of events
	 * from the API to render all the events for the block.
	 *
	 * @returns {*}
	 */
	renderEvents() {

		const { className, attributes } = this.props;

		const events = this.getEvents();

		const classes = classnames( 'upcoming-events', {
			[className]: className,
		} );

		return (
			<div className="section-body">
				<div className={classes}>
					{'small' === attributes.style ? events.map( ( event ) => this.renderEvent( event ) ) : (
						<Placeholder
							icon="admin-post"
							label={__( 'No Live Preview', 'bm-block-upcoming-events' )}
							instructions={__( 'This view does not have a live preview in the editor. To see how this block will look, please save and preview the page.', 'bm-block-upcoming-events' )}
						/>
					)}
				</div>
			</div>
		);
	}

	/**
	 * Render the block.
	 *
	 * @returns {*}
	 */
	render() {

		const { isRequesting } = this.props;

		/**
		 * If we are still fetching data from the API,
		 * then we show a placeholder while we are loading.
		 */
		if ( isRequesting ) {
			return (
				<Fragment>
					{Inspector( this.props )}
					<Placeholder
						icon="admin-post"
						label={__( 'Loading sessions...', 'bm-block-track-timetable' )}
					>
						<Spinner />
					</Placeholder>
				</Fragment>
			);
		}

		/**
		 * When we have data, we show the complete section
		 * with the posts data rendered.
		 */
		return (
			<Fragment>

				{this.renderEvents()}

			</Fragment>
		);
	}

}

/**
 * Through "withSelect" we are able to get the data
 * from the REST API and helper methods built into Gutenberg.
 *
 * What we return is then exposed as "props" in
 * the React component.
 */
export default withSelect( ( select, props ) => {

	const { attributes } = props;

	const events = select( 'bm/upcoming-events' );

	const today = new Date().toISOString().slice( 0, 10 );

	let query = {
		per_page: attributes.amount,
		start_date: today,
	};

	if ( attributes.inCategories && attributes.inCategories.length > 0 ) {
		query.categories = attributes.inCategories.join( ',' );
	}

	if ( attributes.inTags && attributes.inTags.length > 0 ) {
		query.tags = attributes.inTags.join( ',' );
	}

	const params = '?' + Object.keys( query ).map( k => `${encodeURIComponent( k )}=${encodeURIComponent( query[k] )}` ).join( '&' );

	return {
		/**
		 * Get the events
		 */
		events: events.getEvents( params ),
	};

} )( UpcomingEventsEdit );
