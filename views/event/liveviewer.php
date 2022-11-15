<?php
/**
 * Live Viewer
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Components;

use BernskioldMedia\WP\Event\Queries;
use BernskioldMedia\WP\Event\SessionHelper;

$session = Queries::get_current_or_next_event();

if( $session ) : ?>
	<figure class="session-player" data-event-id="<?php echo esc_attr( $session->ID ); ?>">
		<?php SessionHelper::the_player( $session->ID ); ?>
	</figure>
<?php else: ?>
	<figure class="session-player" data-event-id="0">
		<div class="session-player-placeholder">
			Check back here later for more events.
		</div>
	</figure>
<?php endif; ?>
