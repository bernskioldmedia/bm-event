<?php
/**
 * Speaker Data
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Event
 * @since   1.0.0
 */

namespace BernskioldMedia\WP\Event\Data;

use BernskioldMedia\WP\Event\Abstracts\Data;

defined( 'ABSPATH' ) || exit;

/**
 * Class Speaker
 *
 * @package BernskioldMedia\WP\Event
 */
class Speaker extends Data {

	/**
	 * Reference to the data store.
	 *
	 * @var string
	 */
	protected static $data_store = \BernskioldMedia\WP\Event\Data_Stores\Speaker::class;

	/**
	 * Get Name
	 *
	 * @return string|null
	 */
	public function get_name(): ?string {
		return $this->get_first_name() . ' ' . $this->get_last_name();
	}

	/**
	 * Get First Name
	 *
	 * @return string|null
	 */
	public function get_first_name(): ?string {
		return $this->get_prop( 'speaker_first_name' );
	}

	/**
	 * Get Last Name
	 *
	 * @return string|null
	 */
	public function get_last_name(): ?string {
		return $this->get_prop( 'speaker_last_name' );
	}

	/**
	 * Get speaker company name.
	 *
	 * @return string|null
	 */
	public function get_company(): ?string {
		return $this->get_prop( 'speaker_company' );
	}

	/**
	 * Get speaker title / role at company.
	 *
	 * @return string|null
	 */
	public function get_title(): ?string {
		return $this->get_prop( 'speaker_title' );
	}

	/**
	 * Get the short biography for the speaker.
	 *
	 * @return string|null
	 */
	public function get_short_biography(): ?string {
		return $this->get_prop( 'speaker_short_biography' );
	}

	/**
	 * Get the speakers' website URL.
	 *
	 * @return string|null
	 */
	public function get_website_url(): ?string {
		return $this->get_prop( 'speaker_website_url' );
	}

	/**
	 * Get the speakers' twitter handle/username.
	 *
	 * @return string|null
	 */
	public function get_twitter_handle(): ?string {
		return $this->get_prop( 'speaker_twitter_handle' );
	}

	/**
	 * Get the URL to the speaker's Facebook page.
	 *
	 * @return string|null
	 */
	public function get_facebook_url(): ?string {
		return $this->get_prop( 'speaker_facebook_url' );
	}

	/**
	 * Get the speaker's Instagram username.
	 *
	 * @return string|null
	 */
	public function get_instagram_username(): ?string {
		return $this->get_prop( 'speaker_instagram_username' );
	}

	/**
	 * Get the speaker's YouTube channel URL.
	 *
	 * @return string|null
	 */
	public function get_youtube_url(): ?string {
		return $this->get_prop( 'speaker_youtube_url' );
	}

	/**
	 * Get the speaker's LinkedIn profile URL.
	 *
	 * @return string|null
	 */
	public function get_linkedin_url(): ?string {
		return $this->get_prop( 'speaker_linkedin_url' );
	}

}
