<?php
/**
 * Installer
 *
 * @package BernskioldMedia\WP\Event
 */

namespace BernskioldMedia\WP\Event;

use BernskioldMedia\WP\Event\Roles\User_Roles;

defined( 'ABSPATH' ) || exit;

/**
 * Class Install
 *
 * @package BernskioldMedia\WP\Event
 */
class Install {

	/**
	 * Main Install Process
	 */
	public static function install(): void {

		self::scheduled_tasks();
		User_Roles::install();

		do_action( 'bm_event_install' );

		flush_rewrite_rules();

	}

	/**
	 * Scheduled Tasks
	 */
	public static function scheduled_tasks(): void {

	}

}
