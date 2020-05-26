<?php
/**
 * Queries Interface
 *
 * The data interface ensures that our queries classes
 * have the same type of functions.
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Interfaces;

defined( 'ABSPATH' ) || exit;

/**
 * Interface Queries_Interface
 *
 * @package BernskioldMedia\WP\Event
 */
interface Queries_Interface {

	/**
	 * Get all records for the object.
	 *
	 * @return int[]
	 */
	public static function get_all();

	/**
	 * Get the post type key set in the class.
	 *
	 * @return string
	 */
	public static function get_post_type();

	/**
	 * Get the default records per page.
	 *
	 * @return int
	 */
	public static function get_records_per_page();

}
