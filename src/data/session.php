<?php
/**
 * Session Data
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Data;

use BernskioldMedia\WP\Event\Abstracts\Data;

defined( 'ABSPATH' ) || exit;

/**
 * Class Session
 *
 * @package BernskioldMedia\WP\Event
 */
class Session extends Data {

	/**
	 * Get Session Title
	 *
	 * @return string
	 */
	public function get_title(): string {
		return get_the_title( $this->get_id() );
	}

	/**
	 * Get session topic.
	 *
	 * @return string|null
	 */
	public function get_topic(): ?string {
		return $this->get_prop( 'session_topic' );
	}

	/**
	 * Get the session short description
	 *
	 * @return string|null
	 */
	public function get_short_description(): ?string {
		return $this->get_prop( 'session_short_description' );
	}

	/**
	 * Get the type of the session with both value and label.
	 *
	 * @return array|null
	 */
	public function get_session_type(): ?array {
		return $this->get_prop( 'session_type' );
	}

	/**
	 * Get the session type key (value).
	 *
	 * @return string|null
	 */
	public function get_session_type_key(): ?string {
		$session_type = $this->get_session_type();

		return $session_type ? $session_type['value'] : null;
	}

	/**
	 * Get the session type label. Localized.
	 *
	 * @return string|null
	 */
	public function get_session_type_label(): ?string {
		$session_type = $this->get_session_type();

		return $session_type ? $session_type['label'] : null;
	}

	/**
	 * Get the date the session is at.
	 *
	 * @param  string  $format  date() compatible string.
	 *
	 * @return string|null
	 */
	public function get_date( string $format = 'Y-m-d' ): ?string {
		$date = $this->get_prop( 'session_date' );

		if ( ! $date ) {
			return null;
		}

		return wp_date( $format, strtotime( $date ) );
	}

	/**
	 * Get the time when the session starts.
	 *
	 * @param  string  $format  date() compatible format.
	 *
	 * @return string|null
	 */
	public function get_start_time( string $format = 'H:i' ): ?string {
		$time = $this->get_prop( 'session_start_time' );

		if ( ! $time ) {
			return null;
		}

		return wp_date( $format, strtotime( $time ) );
	}

	/**
	 * Get the time when the session ends.
	 *
	 * @param  string  $format  date() compatible format.
	 *
	 * @return string|null
	 */
	public function get_end_time( string $format = 'H:i' ): ?string {
		$time = $this->get_prop( 'session_end_time' );

		if ( ! $time ) {
			return null;
		}

		return wp_date( $format, strtotime( $time ) );
	}

	/**
	 * Get an array of speaker IDs associated with this session.
	 *
	 * @return array|null
	 */
	public function get_speaker_ids(): ?array {
		return $this->get_prop( 'session_speakers_ids' );
	}

	/**
	 * Get the speakers (with objects) associated with this session.
	 *
	 * @return Speaker[]|null
	 */
	public function get_speakers(): ?array {
		$ids = $this->get_speaker_ids();

		if ( ! $ids ) {
			return null;
		}

		$speakers = [];

		foreach ( $ids as $id ) {
			$speakers[] = new Speaker( $id );
		}

		return $speakers;
	}

}
