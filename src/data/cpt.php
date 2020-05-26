<?php
/**
 * CPT Data
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Data;

use BernskioldMedia\WP\Event\Abstracts\Data;

defined( 'ABSPATH' ) || exit;

/**
 * Class CPT
 *
 * @package BernskioldMedia\WP\Event
 */
class CPT extends Data {

	/**
	 * Get Customer Name
	 *
	 * @return string
	 */
	public function get_name() {
		return get_the_title( $this->get_id() );
	}

}
