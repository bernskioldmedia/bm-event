<?php
/**
 * Customizer Settings
 *
 */

namespace BernskioldMedia\WP\Event;

class Customizer {

	protected $wp_customize;

	private $setting_template = 'bm_event_%s';

	private $default_setting_args = [
		'default'   => '',
		'type'      => 'theme_mod',
		'transport' => 'refresh',
	];

	private $default_control_args = [
		'label'    => '',
		'type'     => 'text',
		'settings' => '',
		'context'  => '',
	];

	/**
	 * Customizer constructor.
	 */
	public function __construct() {
		add_action( 'customize_register', [ $this, 'register' ] );
	}

	/**
	 * Register the customizer extension.
	 *
	 * @param \WP_Customize_Manager $wp_customize
	 */
	public function register( $wp_customize ) {

		$this->wp_customize = $wp_customize;

		/**
		 * Event Settings
		 */
		$this->event_settings_section();
		$this->event_settings_settings();

	}

	/**
	 * Section: Event Settings
	 */
	private function event_settings_section() {

		$this->wp_customize->add_section( 'event_settings', [
			'title'       => __( 'Event Settings', 'bm-event' ),
			'priority'    => 36,
			'capability'  => 'edit_theme_options',
			'description' => __( 'General event settings', 'bm-event' ),
		] );

	}

	/**
	 * Settings: Event Settings
	 */
	private function event_settings_settings() {

		// Register new settings to the WP database
		$this->wp_customize->add_setting( 'registration_url' );

		$this->add_setting_and_control( 'registration_url', 'WP_Customize_Control', [
			'label'   => __( 'Registration URL', 'bm-event' ),
			'section' => 'event_settings',
		] );

	}

	/**
	 * Adds the customizer setting and control.
	 *
	 * @param string $index           Array key index to use for the customizer setting.
	 * @param string $control_type    Which control to create.
	 * @param array  $control_args    Customizer control object arguments.
	 *                                Only those different from the default need to be passed.
	 * @param string $id              Optional. Customizer control object ID.
	 *                                Will default to 'bm-event-' . $index.
	 * @param array  $custom_settings Optional. Customizer setting arguments.
	 *                                Only those different from the default need to be passed.
	 */
	private function add_setting_and_control( $index, $control_type, $control_args, $id = null, $custom_settings = [] ) {

		$setting                  = sprintf( $this->setting_template, $index );
		$control_args             = array_merge( $this->default_control_args, $control_args );
		$control_args['settings'] = $setting;

		$settings_args = $this->default_setting_args;

		if ( ! empty( $custom_settings ) ) {
			$settings_args = array_merge( $settings_args, $custom_settings );
		}

		if ( ! isset( $id ) ) {
			$id = 'bm_event-' . $index;
		}

		$this->wp_customize->add_setting( $setting, $settings_args );


		$control = new $control_type( $this->wp_customize, $id, $control_args );

		$this->wp_customize->add_control( $control );
	}

}

new Customizer();
