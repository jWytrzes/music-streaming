import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Card, Columns, Button, List } from 'react-bulma-components';

const Playlist = () => {
	const { id } = useParams();
	const [playlist, setPlaylist] = useState();
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setRefresh(false);
		const fetchData = async () => {
			const result = await fetch(`http://localhost:3001/playlists/${id}`);
			const json = await result.json();
			setPlaylist(json.playlist);
		};
		fetchData();
	}, [refresh]);

	return (
		<div className='pageWrapper'>
			{playlist && (
				<div className='artist'>
					<div className='artist__heading'>
						<small> ID: {playlist.ID} </small>
            <Heading size={1}>Playlist: "{playlist.name}"</Heading>
					</div>
					<p> {playlist.description} </p>
					<br/>
          <small> User: {playlist.user && playlist.user.firstName} {playlist.user && playlist.user.lastName} </small>
          <div>
          <Columns>
						<Columns.Column>
							<Heading size={3}> Tracks: {playlist.tracks.length}</Heading>
							<List hoverable>
								{playlist.tracks.map((track) => (
									<List.Item key={track.ID}>
										<Heading size={4}> {track.name} </Heading>
                    <br/>
                    <small> Duration: &nbsp; {Math.floor(track.duration / 60)}:{track.duration - Math.floor(track.duration / 60)*60 } </small>
									</List.Item>
								))}
							</List>
						</Columns.Column>
					</Columns>
          </div>
					
				</div>
			)}
		</div>
	);
};

export default Playlist;
