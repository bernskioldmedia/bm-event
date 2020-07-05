/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	ToggleControl,
	SelectControl
} = wp.components;

/**
 * Posts Block Inspector
 */
export default function Inspector( props ) {

	const { attributes, setAttributes } = props;
	const { showTimezoneSelector } = attributes;

	return (
		<InspectorControls>

			<PanelBody title={__( "Timezone Selector", "bm-block-track-timetable" )}>
				<ToggleControl
					label={__( "Show timezone selector?", "bm-block-track-timetable" )}
					checked={showTimezoneSelector}
					onChange={( showTimezoneSelector ) => setAttributes( { showTimezoneSelector } )}
				/>
			</PanelBody>

		</InspectorControls>
	);

}
