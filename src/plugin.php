<?php

namespace BernskioldMedia\WP\Event;

use BernskioldMedia\WP\Block_Plugin_Support\Traits\Has_Blocks;
use BernskioldMedia\WP\Event\Data_Stores\Session;
use BernskioldMedia\WP\Event\Data_Stores\Speaker;
use BernskioldMedia\WP\Event\Data_Stores\Track;

defined( 'ABSPATH' ) || exit;

/**
 * Class Plugin
 *
 * @package BernskioldMedia\WP\Event
 */
class Plugin {

	use Has_Blocks;

	/**
	 * Version
	 *
	 * @var string
	 */
	protected const VERSION = '1.0.0';

	/**
	 * Database Version
	 *
	 * @var string
	 */
	protected const DATABASE_VERSION = '1000';

	/**
	 * Plugin Textdomain
	 *
	 * @var string
	 */
	public const TEXTDOMAIN = 'bm-event';

	/**
	 * Plugin Class Instance Variable
	 *
	 * @var object
	 */
	protected static $_instance = null;

	/**
	 * Data Stores
	 *
	 * @var array
	 */
	public static $data_stores = [
		Session::class,
		Speaker::class,
		Track::class,
	];

	/**
	 * REST Endpoints
	 *
	 * @var array
	 */
	public static $rest_endpoints = [];

	/**
	 * Plugin Instantiator
	 *
	 * @return object
	 */
	public static function instance() {

		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;

	}

	/**
	 * Cloning is forbidden.
	 *
	 * @since 1.2
	 */
	private function __clone() {
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 *
	 * @since 1.2
	 */
	private function __wakeup() {
	}

	/**
	 * Constructor
	 */
	public function __construct() {

		register_activation_hook( BM_EVENT_FILE_PATH, [ Install::class, 'install' ] );

		do_action( 'before_bm_event_loading' );

		$this->loaders();
		$this->init_hooks();

		do_action( 'after_bm_event_loaded' );

	}

	/**
	 * Hooks that are run on the time of init.
	 */
	private function init_hooks(): void {
		add_action( 'init', [ self::class, 'load_languages' ] );
		add_filter( 'block_categories', [ self::class, 'setup_block_categories' ] );

		do_action( 'bm_event_init' );
	}

	/**
	 * Setup Block Categories
	 *
	 * @param  array  $categories
	 *
	 * @return array
	 */
	public static function setup_block_categories( $categories ): array {
		return array_merge( $categories, [
			[
				'slug'  => 'event',
				'title' => __( 'Event Related', 'bm-block-library' ),
			],
		] );
	}

	/**
	 * Load plugin translations.
	 */
	public static function load_languages(): void {

		$locale = is_admin() && function_exists( 'get_user_locale' ) ? get_user_locale() : get_locale();
		$locale = apply_filters( 'plugin_locale', $locale, self::TEXTDOMAIN );

		unload_textdomain( self::TEXTDOMAIN );

		// Start checking in the main language dir.
		load_textdomain( self::TEXTDOMAIN, WP_LANG_DIR . '/' . self::TEXTDOMAIN . '/' . self::TEXTDOMAIN . '-' . $locale . '.mo' );

		// Otherwise, load from the plugin.
		load_plugin_textdomain( self::TEXTDOMAIN, false, self::get_path( 'languages/' ) );

	}

	/**
	 * We have various points of data that need to be called and loaded.
	 * What we load are stored in class variables. Add your class name there.
	 */
	public function loaders(): void {

		// Data Stores.
		foreach ( self::$data_stores as $data_store ) {
			new $data_store();
		}

		// REST Endpoints.
		foreach ( self::$rest_endpoints as $endpoint ) {
			( new $endpoint() )->load();
		}

	}

	/**
	 * Get the path to the plugin folder, or the specified
	 * file relative to the plugin folder home.
	 *
	 * @param  string  $file
	 *
	 * @return string
	 */
	public static function get_path( $file = '' ): string {
		return untrailingslashit( plugin_dir_path( BM_EVENT_FILE_PATH ) ) . '/' . $file;
	}

	/**
	 * Get the URL to the plugin folder, or the specified
	 * file relative to the plugin folder home.
	 *
	 * @param  string  $file
	 *
	 * @return string
	 */
	public static function get_url( $file = '' ): string {
		return untrailingslashit( plugin_dir_url( BM_EVENT_FILE_PATH ) ) . '/' . $file;
	}

	/**
	 * Get the URL to the assets folder, or the specified
	 * file relative to the assets folder home.
	 *
	 * @param  string  $file
	 *
	 * @return string
	 */
	public static function get_assets_url( $file = '' ): string {
		return self::get_url( 'assets/' . $file );
	}

	/**
	 * Get AJAX URL
	 *
	 * @return string
	 */
	public static function get_ajax_url(): string {
		return admin_url( 'admin-ajax.php', 'relative' );
	}

	/**
	 * Get the Plugin's Version
	 *
	 * @return string
	 */
	public static function get_version(): string {
		return self::VERSION;
	}

	/**
	 * Get the database version number.
	 *
	 * @return string
	 */
	public static function get_database_version(): string {
		return self::DATABASE_VERSION;
	}

	/**
	 * Place the logic where you add blocks in here.
	 *
	 * @return mixed
	 */
	public function blocks() {
		// TODO: Implement blocks() method.
	}
}
