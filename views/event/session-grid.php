<?php
/**
 * Session Grid
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Components;

use BernskioldMedia\WP\Event\Plugin;$timezone = array_key_exists( 'event_timezone', $_COOKIE) ? $_COOKIE['event_timezone'] : 'Europe/London';

?>
<div class="bm-event-timezone-selector">
	<p>Select a city to see the schedule in your time:</p>
	<select id="event_timezone" name="event_timezone" class="js--timezone-selector">
		<?php echo wp_timezone_choice( $timezone ); ?>
	</select>
</div>
<div class="sessions is-style-grid pb-20 js--session-grid" style="padding-top: 2rem;">
	<?php Plugin::load_template('event/session-grid-body'); ?>
</div>
