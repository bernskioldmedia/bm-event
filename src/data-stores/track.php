<?php
/**
 * Track
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Data_Stores;

use BernskioldMedia\WP\Event\Abstracts;

defined( 'ABSPATH' ) || exit;

/**
 * Class Track
 *
 * @package BernskioldMedia\WP\Event
 */
class Track extends Abstracts\Taxonomy {

	/**
	 * Taxonomy Key
	 *
	 * @var string
	 */
	protected static $key = 'track';

	/**
	 * Taxonomy Plural Key
	 *
	 * @var string
	 */
	protected static $plural_key = 'tracks';

	/**
	 * Taxonomy Post Types
	 *
	 * @var string
	 */
	protected static $post_types = [
		Session::class,
	];

	/**
	 * Register the taxonomy.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_taxonomy/
	 */
	public static function register() {

		$labels = [
			'name'                       => _x( 'Tracks', 'Taxonomy General Name', 'bm-event' ),
			'singular_name'              => _x( 'Track', 'Taxonomy Singular Name', 'bm-event' ),
			'menu_name'                  => __( 'Tracks', 'bm-event' ),
			'all_items'                  => __( 'All Tracks', 'bm-event' ),
			'parent_item'                => __( 'Parent Track', 'bm-event' ),
			'parent_item_colon'          => __( 'Parent Track:', 'bm-event' ),
			'new_item_name'              => __( 'New Track Name', 'bm-event' ),
			'add_new_item'               => __( 'Add New Track', 'bm-event' ),
			'edit_item'                  => __( 'Edit Track', 'bm-event' ),
			'update_item'                => __( 'Update Track', 'bm-event' ),
			'view_item'                  => __( 'View Track', 'bm-event' ),
			'separate_items_with_commas' => __( 'Separate tracks with commas', 'bm-event' ),
			'add_or_remove_items'        => __( 'Add or remove tracks', 'bm-event' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'bm-event' ),
			'popular_items'              => __( 'Popular Tracks', 'bm-event' ),
			'search_items'               => __( 'Search Tracks', 'bm-event' ),
			'not_found'                  => __( 'Not Found', 'bm-event' ),
		];

		$args = [
			'labels'             => $labels,
			'hierarchical'       => true,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_admin_column'  => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_in_quick_edit' => true,
			'show_in_rest'       => true, // Must be true for Gutenberg.
			'show_tagcloud'      => false,
			'rewrite'            => [
				'slug'         => _x( 'tracks', 'tracks taxonomy slug ', 'bm-event' ),
				'with_front'   => false,
				'hierarchical' => true,
			],
			'capabilities'       => self::get_capabilities(),
		];

		register_taxonomy( self::get_key(), self::get_post_type_keys(), $args );

	}

}
