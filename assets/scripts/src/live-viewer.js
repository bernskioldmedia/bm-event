/**
 * Call a REST API endpoint every five minutes to check for new end time and new end video.
 *
 * On the end time, refresh and load new video.
 */
( function() {

	const ENDPOINT = BMELiveViewer.apiUrl + '/next-video';
	let hasNextVideo = false;
	let eventId = parseInt( document.querySelector( '.session-player' ).dataset.eventId );

	const getData = async () => {
		fetch( ENDPOINT )
			.then( res => res.json() )
			.then( ( res ) => {
				hasNextVideo = !! res.id;

				if ( res.id !== eventId && res.should_refresh ) {
					window.location.reload();
				}
			} );
	};

	const poll = async ( { fn, interval, maxAttempts } ) => {
		let attempts = 0;

		const executePoll = async ( resolve, reject ) => {
			const result = await fn();
			attempts++;

			if ( result ) {
				return resolve( result );
			} else if ( maxAttempts && attempts === maxAttempts ) {
				return reject( new Error( 'Exceeded max attempts' ) );
			} else {
				setTimeout( executePoll, interval, resolve, reject );
			}
		};

		return new Promise( executePoll );
	};

	if ( eventId !== 0 ) {
		poll( {
			fn: getData,
			interval: BMELiveViewer.pollingInterval,
		} );
	}

} )( BMELiveViewer );
