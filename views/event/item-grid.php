<?php

use BernskioldMedia\WP\Event\Data\Session;

$session = new Session( get_the_ID() ); ?>

<article <?php post_class( 'session-grid-item' ); ?> id="session-<?php the_ID(); ?>">

	<?php if ( has_post_thumbnail() ) : ?>
		<figure class="session-grid-item-figure" style="background-image: url('<?php echo esc_url( get_the_post_thumbnail_url( get_the_ID(), 'medium' ) ); ?>')">
			<?php the_post_thumbnail( 'medium' ); ?>
		</figure>
	<?php endif; ?>

	<div class="session-grid-item-time">

		<?php if ( $session->get_start_time() ) : ?>
			<time datetime="<?php echo esc_attr( $session->get_date( 'Y-m-d' ) ); ?> <?php echo esc_attr( $session->get_start_time() ); ?>" class="session-grid-item-time-start js-event-start-time">
				<?php echo esc_html( $session->get_start_time() ); ?>
			</time>
		<?php endif; ?>

		<?php if ( $session->get_end_time() ) : ?>
			<span class="session-grid-item-time-separator"></span>
			<time datetime="<?php echo esc_attr( $session->get_date( 'Y-m-d' ) ); ?> <?php echo esc_attr( $session->get_end_time() ); ?>" class="session-grid-item-time-end js-event-end-time">
				<?php echo esc_html( $session->get_end_time() ); ?>
			</time>
		<?php endif; ?>
	</div>

	<div class="session-grid-item-info">

		<h3 class="session-grid-item-title"><?php the_title(); ?></h3>

		<?php if ( $session->get_topic() ) : ?>
			<p class="session-grid-item-topic"><?php echo esc_html( $session->get_topic() ); ?></p>
		<?php endif; ?>

		<?php if ( $session->get_short_description() ) : ?>
			<p class="session-grid-item-description">
				<?php echo esc_html( $session->get_short_description() ); ?>
			</p>
		<?php endif; ?>

		<?php if ( $session->get_speakers() ) : ?>
			<div class="session-grid-item-speakers speaker-list">

				<?php foreach ( $session->get_speakers( OBJECT_K ) as $speaker ) : ?>

					<div class="speaker-list-item">

						<?php if ( has_post_thumbnail( $speaker->get_id() ) ) : ?>
							<figure class="speaker-list-item-figure">
								<img src="<?php echo esc_attr( get_the_post_thumbnail_url( $speaker->get_id(),
									'thumbnail' ) ); ?>" alt="<?php echo esc_attr( $speaker->get_name() ); ?>">
							</figure>
						<?php endif; ?>

						<div class="speaker-list-item-info">
							<p class="speaker-list-item-name"><?php echo esc_html( $speaker->get_name() ); ?></p>

							<?php if ( $speaker->get_title() ) : ?>
								<p class="speaker-list-item-title">
									<?php echo esc_html( $speaker->get_title() ); ?>
								</p>
							<?php endif; ?>
						</div>
					</div>

				<?php endforeach; ?>

			</div>
		<?php endif; ?>

	</div>

	<div class="session-grid-item-actions">
		<?php if ( $session->get_booking_url() ): ?>
			<a href="<?php echo esc_url( $session->get_booking_url() ); ?>" class="session-grid-item-action">
				<?php esc_html_e( 'Book Your Place', 'bm-event' ); ?>
			</a>
		<?php endif; ?>
	</div>

</article>
