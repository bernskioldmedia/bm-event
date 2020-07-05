import $ from "jquery";
import Cookies from "js-cookie";
import moment from "moment";
import "moment-timezone";

export default function Timezones() {

	const tzSelectorWrapper = document.querySelector( ".js--track-timetable-timezone-selector" );

	// If timezone support not enabled, don't run this.
	if ( ! tzSelectorWrapper ) {
		return;
	}

	// Page loads with the default timezone.
	moment.tz.setDefault( BMEvent.siteTimezone );

	// Render the TZ Selector.
	tzSelectorWrapper.innerHTML = renderTimezonesSelector();
	$( ".js--track-timetable-timezone-selector select" ).select2( {
		placeholder: BMEvent.texts.selectTz,
	} );

	const savedTimeZone = getSavedTimezone();

	/**
	 * If we have a stored timezone in cookies,
	 * then apply this and re-render all times.
	 *
	 * Otherwise, we try and guess the user's time zone.
	 */
	if ( savedTimeZone ) {
		setTimezone( savedTimeZone, BMEvent.siteTimezone );
	} else {
		const userTimeZone = getCurrentUserTimezone();

		if ( userTimeZone ) {
			setTimezone( userTimeZone, BMEvent.siteTimezone );
		}
	}

	/**
	 * When the user selects a new time zone from the
	 * dropdown, we store in cookie and re-render the times
	 * on the page.
	 */
	tzSelectorWrapper
		.querySelector( "select" )
		.addEventListener( "change", function() {
			if ( null !== this.value ) {
				setTimezone( this.value, getCurrentTimeZone() );
			}
		} );

	$( ".js--track-timetable-timezone-selector select" ).on( "select2:select", function( e ) {
		if ( null !== e.params.data.id ) {
			setTimezone( e.params.data.id, getCurrentTimeZone() );
		}
	} );

}

/**
 * Get saved timezone from cookies.
 *
 * @returns {null|string}
 */
function getSavedTimezone() {
	const saved = Cookies.get( "bm_events_tz" );

	if ( "undefined" === saved ) {
		return null;
	}

	return saved;
}

/**
 * Apply the new timezone and re-render times.
 *
 * @param {string} newTimeZone
 * @param {string} sourceTimeZone
 */
function setTimezone( newTimeZone, sourceTimeZone ) {

	// Store the selected TZ as a cookie.
	Cookies.set( "bm_events_tz", newTimeZone );

	// Replace the timing in the DOM.
	const startTimes = document.querySelectorAll( ".js-event-start-time" );
	const endTimes = document.querySelectorAll( ".js-event-end-time" );

	startTimes.forEach( ( startTime ) => renderTimes( startTime, newTimeZone, sourceTimeZone ) );
	endTimes.forEach( ( endTime ) => renderTimes( endTime, newTimeZone, sourceTimeZone ) );

}

/**
 * Update all times on the page with the new timezone.
 *
 * @param element
 * @param {string} timezone
 */
function renderTimes( element, newTimeZone, sourceTimeZone ) {

	const originalDateTime = element.getAttribute( "datetime" );

	const localDateTime = convertTimeToTimezone( originalDateTime, newTimeZone, sourceTimeZone, "YYYY-MM-DD HH:mm" );
	const localHumanReadable = convertTimeToTimezone( originalDateTime, newTimeZone, sourceTimeZone, "HH:mm" );

	element.setAttribute( "datetime", localDateTime );
	element.textContent = localHumanReadable;
}

/**
 * Convert time to timezone.
 *
 * @param {string} time
 * @param {string} newTimeZone
 * @param {string} sourceTimeZone
 * @param {string} format
 *
 * @return {string} Time in new timezone.
 */
function convertTimeToTimezone( time, newTimeZone, sourceTimeZone, format = "YYYY-MM-DD" ) {
	const originalTime = moment.tz( time, sourceTimeZone );

	return originalTime.clone().tz( newTimeZone ).format( format );
}

/**
 * Render the timezone selector.
 *
 * @returns {string}
 */
function renderTimezonesSelector() {
	return `<label for="bm-events-tz-selector">${BMEvent.texts.tzLabel}</label><select>
<option value="null" disabled="disabled" name="bm-events-tz-selector" id="bm-events-tz-selector">${BMEvent.texts.selectTz}</option>
${renderTimezoneSelectorOptions()}
</select>`;
}

/**
 * Render the timezone selector options.
 * @returns {*}
 */
function renderTimezoneSelectorOptions() {

	const _t = ( s ) => {
		if ( i18n !== void 0 && i18n[s] ) {
			return i18n[s];
		}

		return s;
	};

	return moment.tz.names()
				 .reduce( ( memo, tz ) => {
					 memo.push( {
						 name: tz,
						 offset: moment.tz( tz ).utcOffset()
					 } );

					 return memo;
				 }, [] )
				 .sort( ( a, b ) => {
					 return a.offset - b.offset;
				 } )
				 .reduce( ( memo, tz ) => {
					 const timezone = tz.offset ? moment.tz( tz.name ).format( "Z" ) : "";
					 const name = tz.name.replace( "/", " - " );

					 let selected = "";

					 if ( tz.name === getCurrentTimeZone() ) {
						 selected = "selected";
					 }

					 return memo.concat( `<option value="${tz.name}" ${selected} data-offset="${tz.offset}">(GMT${timezone}) ${name}</option>` );
				 }, "" );
}

/**
 * Get the currently active timezone.
 *
 * @returns {string|null}
 */
function getCurrentTimeZone() {
	const savedTimeZone = getSavedTimezone();

	if ( savedTimeZone ) {
		return savedTimeZone;
	}

	const userTimeZone = getCurrentUserTimezone();

	if ( userTimeZone ) {
		return userTimeZone;
	}

	return BMEvent.siteTimezone;

}

/**
 * Guess the user's current timezone.
 *
 * @returns {*}
 */
function getCurrentUserTimezone() {
	return moment.tz.guess();
}
