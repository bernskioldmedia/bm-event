export default function SessionGridItem( props ) {

	const { data } = props;
	const { id, title, start_time, end_time, topic, short_description, speakers } = data;
	return (
		<div className="session-grid-item" id={`session-${id.toString()}`} key={id.toString()}>

			<div className="session-grid-time">

				{start_time && (
					<time className="session-grid-time-start">
						{start_time}
					</time>
				)}

				{end_time && (
					<>
						<span className="session-grid-time-separator"></span>
						<time className="session-grid-time-end">
							{end_time}
						</time>
					</>
				)}

			</div>
			<div className="session-grid-info">

				<h3 className="session-grid-title">{title.rendered}</h3>

				{topic && (
					<p className="session-grid-topic">{topic}</p>
				)}

				{short_description && (
					<p className="session-grid-short-description">
						{short_description}
					</p>
				)}

				{speakers && (
					<div className="session-grid-speakers">
						{speakers.map( ( speaker ) => (
							<div className="speaker">
								<p className="speaker-name">{speaker.name}</p>

								{speaker.title && (
									<p className="speaker-title">{speaker.title}</p>
								)}
							</div>
						) )}
					</div>
				)}

			</div>
		</div>
	);

}
