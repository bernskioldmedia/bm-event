<?php

namespace BernskioldMedia\WP\Event\Blocks\Track_Timetable;

use BernskioldMedia\WP\Block_Plugin_Support\Block;
use BernskioldMedia\WP\Event\Data;
use BernskioldMedia\WP\Event\Data_Stores;

/**
 * Class Track_Timetable_Block
 *
 * @package BernskioldMedia\WP\Event\Blocks\Track_Timetable
 */
class Track_Timetable_Block extends Block {

	/**
	 * Since this is a dynamically generated block, we
	 * define the attributes here using PHP.
	 *
	 * @var array
	 */
	protected static $attributes = [
		'track_id' => [
			'type' => 'number',
		],
		'style'    => [
			'type'    => 'string',
			'default' => 'normal', // Either "mini" or "normal"
		],
	];

	/**
	 * Get Posts Query
	 *
	 * @param  array  $attributes
	 *
	 * @return \WP_Query
	 */
	protected static function get_query( $attributes ) {

		$query_args = [
			'post_type'      => Data_Stores\Session::get_key(),
			'posts_per_page' => 100, // "Everything".
		];

		if ( $attributes['track_id'] ) {
			$query_args['tax_query'][] = [
				'taxonomy' => Data_Stores\Track::get_key(),
				'terms'    => $attributes['track_id'],
				'fields'   => 'term_id',
			];
		}

		return new \WP_Query( $query_args );

	}

	/**
	 * Render the content
	 *
	 * @param  array  $attributes
	 */
	public static function render( $attributes ) {

		$posts = self::get_query( $attributes );

		$classes   = [ 'session-list' ];
		$classes[] = 'is-style-' . $attributes['style'];
		$classes   = implode( ' ', $classes );

		if ( $posts->have_posts() ) : ?>

			<div class="<?php echo esc_attr( $classes ); ?>" id="<?php echo esc_attr( $attributes['anchor'] ); ?>">

				<?php while ( $posts->have_posts() ) : the_post(); // @codingStandardsIgnoreLine ?>

					<?php $session = new Data\Session( get_the_ID() ); ?>

					<article <?php post_class( 'session-list-item' ); ?> id="session-<?php the_ID(); ?>">

						<div class="session-list-item-time">

							<?php if ( $session->get_start_time() ) : ?>
								<time datetime="<?php echo esc_attr( $session->get_date( 'Y-m-d' ) ); ?> <?php echo esc_attr( $session->get_start_time() ); ?>" class="session-list-item-time-start">
									<?php echo esc_html( $session->get_start_time() ); ?>
								</time>
							<?php endif; ?>

							<?php if ( $session->get_end_time() ) : ?>
								<span class="session-list-item-time-separator">
									-
								</span>
								<time datetime="<?php echo esc_attr( $session->get_date( 'Y-m-d' ) ); ?> <?php echo esc_attr( $session->get_end_time() ); ?>" class="session-list-item-time-end">
									<?php echo esc_html( $session->get_end_time() ); ?>
								</time>
							<?php endif; ?>
						</div>

						<div class="session-list-item-info">

							<h3 class="session-list-item-title"><?php the_title(); ?></h3>

							<?php if ( $session->get_topic() ) : ?>
								<p class="session-list-item-topic"><?php echo esc_html( $session->get_topic() ); ?></p>
							<?php endif; ?>

							<?php if ( $session->get_short_description() ) : ?>
								<p class="session-list-item-description">
									<?php echo esc_html( $session->get_short_description() ); ?>
								</p>
							<?php endif; ?>

							<?php if ( $session->get_speakers() ) : ?>
								<div class="session-list-item-speakers">

									<?php foreach ( $session->get_speakers() as $speaker ) : ?>

										<div class="speaker">
											<p class="speaker-name"><?php echo esc_html( $speaker->get_name() ); ?></p>

											<?php if ( $speaker->get_title() ) : ?>
												<p class="speaker-title">
													<?php echo esc_html( $speaker->get_title() ); ?>
												</p>
											<?php endif; ?>
										</div>

									<?php endforeach; ?>

								</div>
							<?php endif; ?>

						</div>

					</article>

				<?php endwhile; ?>

			</div>

		<?php
		endif;

	}

}