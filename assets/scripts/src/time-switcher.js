import Cookies from "js-cookie";
import $ from "jquery";

const timezoneSelector = document.querySelector('.js--timezone-selector');
const sessionGrid = document.querySelector('.js--session-grid');

const handleTimezoneSelection = (event) => {
	Cookies.set('event_timezone', event.target.value);

	fetch(BMETimeSwitcher.apiUrl + '/session-grid')
		.then(res => res.json())
		.then((res) => {
			sessionGrid.innerHTML = res.html;
		});
};

if (timezoneSelector) {
	timezoneSelector.addEventListener('change', handleTimezoneSelection);
}

$( ".js--timezone-selector" ).select2( {
	placeholder: 'Select your timezone...',
} );

$('.js--timezone-selector').on('select2:select', handleTimezoneSelection);
