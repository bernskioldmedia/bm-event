/**
 * Internal Dependencies
 */
import SectionAppearance from "../../components/section/inspector";
import SectionHeaderInspector from "../../components/section-header/inspector";
import SectionFooterInspector from "../../components/section-footer/inspector";
import RecordSelector from "../../components/record-select/record-select";

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

			<PanelBody title={__( "Events Style", "bm-block-upcoming-events" )}>
				<SelectControl
					label={__( "Upcoming Events Style", "bm-block-upcoming-events" )}
					value={attributes.style} // e.g: value = [ 'a', 'c' ]
					onChange={( value ) => {
						setAttributes( { style: value } );
					}}
					options={[
						{
							value: "small",
							label: __( "Small List", "bm-block-upcoming-events" )
						},
						{
							value: "list",
							label: __( "List", "bm-block-upcoming-events" )
						},
						{
							value: "month",
							label: __( "Month", "bm-block-upcoming-events" )
						},
						{
							value: "week",
							label: __( "Week", "bm-block-upcoming-events" )
						}
					]}
				/>
			</PanelBody>

			<PanelBody title={__( "Selection & Filters", "bm-block-upcoming-events" )}>

				<RangeControl
					label={__( "Amount of Events", "bm-block-upcoming-events" )}
					min={3}
					max={9}
					value={attributes.amount}
					beforeIcon="screenoptions"
					allowReset={true}
					onChange={( value ) => {
						setAttributes( {
							amount: value
						} );
					}}
				/>

				<PanelRow>
					<p>{__( "By default the events block will show all the latest events in descending order. Below you can limit the selection.", "bm-block-upcoming-events" )}</p>
				</PanelRow>

				<BaseControl label={__( "Include only from specific categories", "bm-block-upcoming-events" )}>
					<RecordSelector
						value={attributes.inCategories}
						placeholder={__( "Select categories...", "bm-block-upcoming-events" )}
						type="taxonomy"
						objectType="tribe_events_cat"
						onChange={( selected ) => {
							setAttributes( { inCategories: selected } );
						}}
						multiple={true}
					/>
				</BaseControl>

				<BaseControl label={__( "Include only from specific tags.", "bm-block-upcoming-events" )}>
					<RecordSelector
						value={attributes.inTags}
						placeholder={__( "Select tags...", "bm-block-upcoming-events" )}
						type="taxonomy"
						objectType="post_tag"
						onChange={( selected ) => {
							setAttributes( { inTags: selected } );
						}}
						multiple={true}
					/>
				</BaseControl>

			</PanelBody>

			<SectionAppearance {...props} />
			<SectionHeaderInspector {...props} />
			<SectionFooterInspector {...props} />

		</InspectorControls>
	);

}
