/**
 * Internal Dependencies
 */
import edit from './edit';
import icon from './icon';
import save from './save';

/**
 * WordPress Dependencies
 */
const { __ }                = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Set up the Track Timetable Block
 */
registerBlockType( 'bm/track-timetable', {
	title: __( 'Track Timetable', 'bm-block-track-timetable' ),
	description: __(
		'Show a timetable for a single track.',
		'bm-block-track-timetable'
	),
	icon,
	category: 'event',

	keywords: [
		__( 'calendar', 'bm-block-track-timetable' ),
		__( 'events', 'bm-block-track-timetable' ),
		__( 'agenda', 'bm-block-track-timetable' ),
	],
	styles: [
		{
			name: "list",
			label: __( "Agenda", "bm-block-track-timetable" ),
			isDefault: true
		},
		{
			name: "grid",
			label: __( "Visual Grid", "bm-block-track-timetable" )
		}
	],

	supports: {
		anchor: true,
		align: false,
	},

	/**
	 * This block is rendered using PHP.
	 * Therefore its attributes are defined in
	 * the PHP render class.
	 */

	edit,
	save,
} );
