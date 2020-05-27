/**
 * WordPress Dependencies
 */
const { __ }                = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {
		  PanelBody,
		  PanelRow,
		  BaseControl,
		  RangeControl,
		  SelectControl
	  }                     = wp.components;

/**
 * Posts Block Inspector
 */
export default function Inspector( props ) {

	const { attributes, setAttributes } = props;

	return (
		<InspectorControls>

			<PanelBody title={__( 'Events Style', 'bm-block-track-timetable' )}>
				<SelectControl
					label={__( 'Timetable Style', 'bm-block-track-timetable' )}
					value={attributes.style} // e.g: value = [ 'a', 'c' ]
					onChange={( value ) => {
						setAttributes( { style: value } );
					}}
					options={[
						{
							value: 'normal',
							label: __( 'Normal', 'bm-block-track-timetable' )
						},
						{
							value: 'mini',
							label: __( 'Mini', 'bm-block-track-timetable' )
						}
					]}
				/>
			</PanelBody>

		</InspectorControls>
	);

}
