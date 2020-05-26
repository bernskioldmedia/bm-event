<?php
/**
 * REST Endpoint: Example
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Rest;

use BernskioldMedia\WP\Event\Abstracts\REST_Endpoint;
use WP_REST_Response;

defined( 'ABSPATH' ) || exit;

/**
 * Class REST_Example
 *
 * @package BernskioldMedia\WP\Event
 */
class REST_Example extends REST_Endpoint {

	/**
	 * Add the routes for this endpoint.
	 */
	protected function setup_routes(): void {
		$this->add_route(
			'/example',
			[
				'methods'             => self::READABLE,
				'callback'            => [ $this, 'get_example' ],
				'permission_callback' => [ $this, 'has_public_access' ],
			]
		);
	}

	/**
	 * Get Example Data
	 *
	 * @return WP_REST_Response
	 */
	public function get_example(): WP_REST_Response {
		$data = [];

		return new WP_REST_Response( $data, 200 );
	}

}
