export default function SessionListItem( props ) {

	const { data } = props;
	const { id, title, start_time, end_time, topic, short_description, speakers } = data;

	return (
		<div className="session-list-item" id={`session-${id.toString()}`} key={id.toString()}>
			<div className="session-list-item-time">

				{start_time && (
					<time className="session-list-item-time-start">
						{start_time}
					</time>
				)}

				{end_time && (
					<>
						<span className="session-list-item-time-separator"></span>
						<time className="session-list-item-time-end">
							{end_time}
						</time>
					</>
				)}

			</div>
			<div className="session-list-item-info">

				<h3 className="session-list-item-title">{title.rendered}</h3>

				{topic && (
					<p className="session-list-item-topic">{topic}</p>
				)}

				{short_description && (
					<p className="session-list-item-short-description">
						{short_description}
					</p>
				)}

				{speakers && (
					<div className="session-list-item-speakers">
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
