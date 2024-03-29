<?php

namespace BernskioldMedia\WP\Event;

use BernskioldMedia\WP\Block_Plugin_Support\Traits\Has_Blocks;
use BernskioldMedia\WP\Event\Blocks\Track_Timetable\Track_Timetable_Block;
use BernskioldMedia\WP\Event\Data_Stores\Session;
use BernskioldMedia\WP\Event\Data_Stores\Speaker;
use BernskioldMedia\WP\Event\Data_Stores\Track;
use BernskioldMedia\WP\Event\Rest\NextVideo;
use BernskioldMedia\WP\Event\Rest\SessionGrid;
use BernskioldMedia\WP\PluginBase\Abstracts\Base_Plugin;
use BernskioldMedia\WP\PluginBase\Traits\Has_Data_Stores;

defined( 'ABSPATH' ) || exit;

/**
 * Class Plugin
 *
 * @package BernskioldMedia\WP\Event
 */
class Plugin extends Base_Plugin {

	use Has_Blocks, Has_Data_Stores;

	/**
	 * Version
	 *
	 * @var string
	 */
	protected static $version = '1.2.4';

	/**
	 * Database Version
	 *
	 * @var string
	 */
	protected static $database_version = '1000';

	/**
	 * Plugin Textdomain
	 *
	 * @var string
	 */
	protected static $textdomain = 'bm-event';

	/**
	 * Main plugin file path.
	 *
	 * @var string
	 */
	protected static $plugin_file_path = BM_EVENT_FILE_PATH;

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

	protected static string $block_prefix = 'bm';

	/**
	 * Constructor
	 */
	public function __construct() {
		parent::__construct();

		$this->init_hooks();
		$this->load_blocks( 'bm' );
		$this->boot_data_stores();
		$this->classes();

		do_action( 'bm_event_loaded' );

	}

	/**
	 * Hooks that are run on the time of init.
	 */
	protected function init_hooks(): void {
		parent::init_hooks();

		add_filter( 'block_categories', [ self::class, 'setup_block_categories' ] );
		Assets::hooks();
		Shortcodes::hooks();

		(new NextVideo())->load();
		(new SessionGrid())->load();

		do_action( 'bm_event_init' );
	}

	public function classes() {
		require_once 'customizer.php';
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
				'title' => __( 'Events', 'bm-events' ),
			],
		] );
	}

	/**
	 * Place the logic where you add blocks in here.
	 *
	 * @return mixed
	 */
	public function blocks(): void {

		$this->add_block( 'track-timetable', [
			'render_callback' => [ Track_Timetable_Block::class, 'render' ],
			'attributes'      => Track_Timetable_Block::get_attributes(),
		] );

	}

	/**
	 * Load Template
	 *
	 * @param  string  $template_name
	 */
	public static function load_template( $template_name, $variables = [] ): void {

		if($variables) {
			extract($variables);
		}

		$located = locate_template( 'components/' . $template_name );

		if ( $located ) {
			include $located;
		} else {
			include self::get_path( 'views/' . $template_name . '.php' );
		}

	}
}
