<?php
/**
 * Data Store for Speaker
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Data_Stores;

use BernskioldMedia\WP\Event\Abstracts;

defined( 'ABSPATH' ) || exit;

/**
 * Class Speaker
 *
 * @package BernskioldMedia\WP\Event
 */
class Speaker extends Abstracts\Custom_Post_Type {

	/**
	 * Post Type Key
	 *
	 * @var string
	 */
	protected static $key = 'speaker';

	/**
	 * Plural Key
	 *
	 * @var string
	 */
	protected static $plural_key = 'speakers';

	/**
	 * Register Post Type
	 *
	 * @see https://codex.wordpress.org/Function_Reference/register_post_type
	 * @see https://codex.wordpress.org/Function_Reference/register_post_type#Parameters
	 */
	public static function register(): void {

		$labels = [
			'name'                  => _x( 'Speakers', 'Post Type General Name', 'bm-event' ),
			'singular_name'         => _x( 'Speaker', 'Post Type Singular Name', 'bm-event' ),
			'menu_name'             => __( 'Speakers', 'bm-event' ),
			'name_admin_bar'        => __( 'Speakers', 'bm-event' ),
			'archives'              => __( 'Speakers', 'bm-event' ),
			'parent_item_colon'     => __( 'Parent Speaker:', 'bm-event' ),
			'all_items'             => __( 'All Speakers', 'bm-event' ),
			'add_new_item'          => __( 'Add New Speaker', 'bm-event' ),
			'add_new'               => __( 'Add New', 'bm-event' ),
			'new_item'              => __( 'New Speaker', 'bm-event' ),
			'edit_item'             => __( 'Edit Speaker', 'bm-event' ),
			'update_item'           => __( 'Update Speaker', 'bm-event' ),
			'view_item'             => __( 'View Speaker', 'bm-event' ),
			'search_items'          => __( 'Search Speaker', 'bm-event' ),
			'not_found'             => __( 'Not found', 'bm-event' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'bm-event' ),
			'featured_image'        => __( 'Photo', 'bm-event' ),
			'set_featured_image'    => __( 'Set Photo', 'bm-event' ),
			'remove_featured_image' => __( 'Remove Photo', 'bm-event' ),
			'use_featured_image'    => __( 'Use as Photo', 'bm-event' ),
			'insert_into_item'      => __( 'Insert into speaker', 'bm-event' ),
			'uploaded_to_this_item' => __( 'Uploaded to this speaker', 'bm-event' ),
			'items_list'            => __( 'Speakers list', 'bm-event' ),
			'items_list_navigation' => __( 'Speakers list navigation', 'bm-event' ),
			'filter_items_list'     => __( 'Filter speakers list', 'bm-event' ),
			'attributes'            => __( 'Attributes', 'bm-event' ),
		];

		$supports = [
			'title',
			'editor',
			'revisions',
		];

		$args = [
			'label'               => __( 'Speakers', 'bm-event' ),
			'labels'              => $labels,
			'supports'            => $supports,
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true, // Set this to string to make sub-page.
			'menu_position'       => 20,
			'menu_icon'           => 'dashicons-id',
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => _x( 'speakers', 'speaker post type archive slug', 'bm-event' ),
			'rewrite'             => [
				'slug'       => _x( 'speakers', 'speaker post type single slug', 'bm-event' ),
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
