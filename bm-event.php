<?php
/**
 * Plugin Name: BM Event
 * Plugin URI:  https://bernskioldmedia.com
 * Description: Functionality to help you market and manage an event. From showing speakers to a live agenda for one or multiple days.
 * Version:     1.0.0
 * Author:      Bernskiold Media
 * Author URI:  https://bernskioldmedia.com
 * Text Domain: bm-event
 * Domain Path: /languages/
 *
 * @package BernskioldMedia\WP\Event
 */

use BernskioldMedia\WP\Event\Plugin;

defined( 'ABSPATH' ) || exit;

require_once 'autoloader.php';
require 'vendor/autoload.php';

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
