<?php
/**
 * Data Store for Session
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Data_Stores;

use BernskioldMedia\WP\Event\Abstracts;

defined( 'ABSPATH' ) || exit;

/**
 * Class Session
 *
 * @package BernskioldMedia\WP\Event
 */
class Session extends Abstracts\Custom_Post_Type {

	/**
	 * Post Type Key
	 *
	 * @var string
	 */
	protected static $key = 'session';

	/**
	 * Plural Key
	 *
	 * @var string
	 */
	protected static $plural_key = 'sessions';

	/**
	 * Register Post Type
	 *
	 * @see https://codex.wordpress.org/Function_Reference/register_post_type
	 * @see https://codex.wordpress.org/Function_Reference/register_post_type#Parameters
	 */
	public static function register(): void {

		$labels = [
			'name'                  => _x( 'Sessions', 'Post Type General Name', 'bm-event' ),
			'singular_name'         => _x( 'Session', 'Post Type Singular Name', 'bm-event' ),
			'menu_name'             => __( 'Sessions', 'bm-event' ),
			'name_admin_bar'        => __( 'Sessions', 'bm-event' ),
			'archives'              => __( 'Sessions', 'bm-event' ),
			'parent_item_colon'     => __( 'Parent Session:', 'bm-event' ),
			'all_items'             => __( 'All Sessions', 'bm-event' ),
			'add_new_item'          => __( 'Add New Session', 'bm-event' ),
			'add_new'               => __( 'Add New', 'bm-event' ),
			'new_item'              => __( 'New Session', 'bm-event' ),
			'edit_item'             => __( 'Edit Session', 'bm-event' ),
			'update_item'           => __( 'Update Session', 'bm-event' ),
			'view_item'             => __( 'View Session', 'bm-event' ),
			'search_items'          => __( 'Search Session', 'bm-event' ),
			'not_found'             => __( 'Not found', 'bm-event' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'bm-event' ),
			'featured_image'        => __( 'Featured Image', 'bm-event' ),
			'set_featured_image'    => __( 'Set Featured Image', 'bm-event' ),
			'remove_featured_image' => __( 'Remove Featured Image', 'bm-event' ),
			'use_featured_image'    => __( 'Use as Featured Image', 'bm-event' ),
			'insert_into_item'      => __( 'Insert into session', 'bm-event' ),
			'uploaded_to_this_item' => __( 'Uploaded to this session', 'bm-event' ),
			'items_list'            => __( 'Sessions list', 'bm-event' ),
			'items_list_navigation' => __( 'Sessions list navigation', 'bm-event' ),
			'filter_items_list'     => __( 'Filter sessions list', 'bm-event' ),
			'attributes'            => __( 'Attributes', 'bm-event' ),
		];

		$supports = [
			'title',
			'editor',
			'revisions',
		];

		$args = [
			'label'               => __( 'Sessions', 'bm-event' ),
			'labels'              => $labels,
			'supports'            => $supports,
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true, // Set this to string to make sub-page.
			'menu_position'       => 20,
			'menu_icon'           => 'dashicons-schedule',
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => _x( 'sessions', 'examples post type archive slug', 'bm-event' ),
			'rewrite'             => [
				'slug'       => _x( 'sessions', 'examples post type single slug', 'bm-event' ),
				'with_front' => false,
			],
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'delete_with_user'    => null,
			'show_in_rest'        => true, // Required for Gutenberg.
			'capabilities'        => self::get_capabilities(),
			'map_meta_cap'        => true,
		];

		register_post_type( self::get_key(), $args );

	}

}
