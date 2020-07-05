/**
 * External Dependencies
 */
import classnames from "classnames";
import SessionGridItem from "../../components/session-grid-item/session-grid-item";
/**
 * Internal Dependencies
 */
import SessionListItem from "../../components/session-list-item/session-list-item";
import Inspector from "./inspector";

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { apiFetch } = wp;
const { withSelect, registerStore } = wp.data;
const { Component } = wp.element;
const { Placeholder, Spinner, SelectControl } = wp.components;

/**
 * Initial State
 *
 * @type {{sessions: {}}}
 */
const DEFAULT_STATE = {
	sessions: {},
};

/**
 * Actions for the selection
 *
 * @type {{setSessions(*): *, receiveSessions(*): *}}
 */
const actions = {
	setSessions( sessions ) {
		return {
			type: "SET_SESSIONS",
			sessions,
		};
	},
	receiveSessions( path ) {
		return {
			type: "RECIEVE_SESSIONS",
			path,
		};
	},
	setTracks( tracks ) {
		return {
			type: "SET_TRACKS",
			tracks,
		};
	},
	receiveTracks( path ) {
		return {
			type: "RECIEVE_TRACKS",
			path,
		};
	},
};

/**
 * Register custom store for getting and setting the
 * sessions.
 */
registerStore( "bm/track-timetable", {
		reducer( state = DEFAULT_STATE, action ) {

			switch ( action.type ) {
				case "SET_SESSIONS":
					return {
						...state,
						sessions: action.sessions,
					};
				case "SET_TRACKS":
					return {
						...state,
						tracks: action.tracks,
					};
			}

			return state;

		},

		actions,

		selectors: {
			getSessions( state ) {
				const { sessions } = state;
				return sessions;
			},
			getTracks( state ) {
				const { tracks } = state;
				return tracks;
			}
		},

		controls: {
			RECIEVE_SESSIONS( action ) {
				return apiFetch( { path: action.path } );
			},
			RECIEVE_TRACKS( action ) {
				return apiFetch( { path: action.path } );
			}
		},

		resolvers: {
			* getSessions( params = "" ) {
				const sessions = yield actions.receiveSessions( "/wp/v2/session" + params );
				return actions.setSessions( sessions );
			},
			* getTracks( params = "" ) {
				const tracks = yield actions.receiveTracks( "/wp/v2/track" + params );
				return actions.setTracks( tracks );
			}
		},

	}
);

/**
 * Track Timetable Block: Edit Logic
 */
class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	/**
	 * Retrieve sessions from the API via the
	 * withSelect helper.
	 *
	 * @returns {Array}
	 */
	getSessions() {
		const sessions = this.props.sessions;

		if ( ! sessions || ! sessions.length ) {
			return [];
		}

		return sessions;
	}

	getTracksForSelect() {
		const tracks = this.props.tracks;

		if ( ! tracks || ! tracks.length ) {
			return [];
		}

		return [
			{
				value: 0,
				label: __( "Select a track...", "bm-block-track-timetable" )
			},
		].concat( tracks.map( ( track ) => {
			return {
				value: track.id,
				label: track.name
			};
		} ) );
	}

	getStyle( className ) {

		if ( className.includes( "is-style-list" ) ) {
			return "list";
		} else if ( className.includes( "is-style-grid" ) ) {
			return "grid";
		} else {
			return "list";
		}

	}

	/**
	 * Map the render event function to the list of sessions
	 * from the API to render all the sessions for the block.
	 *
	 * @returns {*}
	 */
	renderSessions() {

		const { className } = this.props;

		const sessions = this.getSessions();

		const classes = classnames( "sessions", {
			[className]: className,
		} );

		return (
			<div className={classes}>
				{sessions.map( ( session ) => {
					if ( "grid" === this.getStyle( className ) ) {
						return <SessionGridItem data={session} />;
					} else {
						return <SessionListItem data={session} />;
					}
				} )}
			</div>
		);
	}

	/**
	 * Render the block.
	 *
	 * @returns {*}
	 */
	render() {

		const { isRequesting, attributes, setAttributes } = this.props;

		if ( 0 === attributes.track_id ) {
			return (
				<>
					<Inspector {...this.props} />

					<Placeholder
						icon="admin-post"
						label={__( "Select A Track", "bm-block-track-timetable" )}
						instructions={__( "Select the track you want to display the timetable for.", "bm-block-track-timetable" )}
						isColumnLayout={true}
					>
						<SelectControl
							label={__( "Select a track", "bm-block-track-timetable" )}
							onChange={( value ) => {
								setAttributes( { track_id: parseInt( value ) } );
							}}
							options={this.getTracksForSelect()}
						/>
					</Placeholder>
				</>
			);
		}

		/**
		 * If we are still fetching data from the API,
		 * then we show a placeholder while we are loading.
		 */
		if ( isRequesting ) {
			return (
				<>
					<Inspector {...this.props} />
					<Placeholder
						icon="admin-post"
						label={__( "Loading sessions...", "bm-block-track-timetable" )}
					>
						<Spinner />
					</Placeholder>
				</>
			);
		}

		/**
		 * When we have data, we show the complete section
		 * with the posts data rendered.
		 */
		return (
			<>
				<Inspector {...this.props} />
				{this.renderSessions()}
			</>
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

	const store = select( "bm/track-timetable" );

	let query = {
		per_page: 100, // More than enough for "everything".
		track: attributes.track_id,
	};

	const params = "?" + Object.keys( query ).map( k => `${encodeURIComponent( k )}=${encodeURIComponent( query[k] )}` ).join( "&" );

	return {
		sessions: attributes.track_id ? store.getSessions( params ) : [],
		tracks: store.getTracks( "?per_page=50" ),
	};

} )( Edit );
