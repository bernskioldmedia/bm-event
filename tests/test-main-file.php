<?php
/**
 * Class MainFile
 *
 * @package BernskioldMedia\WP\Event
 */

namespace BernskioldMedia\WP\Event;

/**
 * Main File Tests
 */
class MainFile extends \WP_UnitTestCase {

	/**
	 * Test: Plugin Version
	 *
	 * Make sure plugin version returns an integer.
	 */
	function test_get_plugin_version() {

		$version = Plugin::get_plugin_version();

		$this->assertInternalType( 'string', $version );

	}

}
