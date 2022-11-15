<?php

namespace BernskioldMedia\WP\Event;

/**
 * Class Shortcodes
 *
 * @package BernskioldMedia\WP\Event
 */
class Shortcodes
{
	public static function hooks(): void
	{
		add_shortcode('bm_display_events', [self::class, 'display_events']);
		add_shortcode('bm_liveviewer', [self::class, 'liveviewer']);
	}

	public static function display_events($atts)
	{
		$attributes = shortcode_atts([
			'registration_url' => false,
		], $atts);

		ob_start();

		Plugin::load_template('event/session-grid', $attributes);
		return ob_get_clean();
	}

	public static function liveviewer( ){
		/*
		 * @todo: maybe build support for a date_range
		 */

		ob_start();

		Plugin::load_template('event/liveviewer');
		return ob_get_clean();
	}
}
