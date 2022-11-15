<?php

namespace BernskioldMedia\WP\Event;

use BernskioldMedia\WP\Event\Data\Session;


class Queries {

	public static function get_current_or_next_event(): ?\WP_Post {
		$current_session = self::get_current_session();

		if ( $current_session && ! SessionHelper::should_load_next() ) {
			return $current_session;
		}

		$next_session = self::get_next_session();

		if ( $next_session ) {
			return $next_session;
		}

		return null;
	}

	public static function get_current_session(): ?\WP_Post {
		$args = [
			'meta_key' => 'session_start_datetime',
			'meta_type' => 'DATETIME',
			'meta_query' => [
				[
					'key' => 'session_start_datetime',
					'value' => date('Y-m-d H:i:s'),
					'compare' => '<=',
				],
				[
					'key' => 'session_end_datetime',
					'value' => date('Y-m-d H:i:s'),
					'compare' => '>',
				]
			]
		];
		$sessions = Session::get_all( $args );

		return $sessions[0] ?? null;
	}

	public static function get_next_session(): ?\WP_Post {
		$args = [
			'meta_key' => 'session_start_datetime',
			'meta_type' => 'DATETIME',
			'meta_query' => [
				[
					'key' => 'session_start_datetime',
					'value' => date('Y-m-d H:i:s'),
					'compare' => '>=',
					'type' => 'DATETIME'
				],
			]
		];

		$sessions = Session::get_all( $args );

		return $sessions[0] ?? null;
	}
}
