<?php
/**
 * Plugin Name: BM Event
 * Plugin URI:  https://bernskioldmedia.com
 * Description: Functionality to help you market and manage an event. From showing speakers to a live agenda for one or multiple days.
 * Version:     1.2.1
 * Author:      Bernskiold Media
 * Author URI:  https://bernskioldmedia.com
 * Text Domain: bm-event
 * Domain Path: /languages/
 *
 * @package BernskioldMedia\WP\Event
 */

use BernskioldMedia\WP\Event\Plugin;

defined( 'ABSPATH' ) || exit;

/**
 * Autoloader
 */
require_once 'autoloader.php';

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require __DIR__ . '/vendor/autoload.php';
}

if ( file_exists( WP_CONTENT_DIR . '/vendor/autoload.php' ) ) {
	require_once WP_CONTENT_DIR . '/vendor/autoload.php';
}
/**
 * Basic Constants
 */
define( 'BM_EVENT_FILE_PATH', __FILE__ );

/**
 * Initialize and boot the plugin.
 *
 * @return Plugin
 */
function bm_event() {
	return Plugin::instance();
}

bm_event();
