import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Card, Columns, Button, List } from 'react-bulma-components';

const Artist = () => {
	const { id } = useParams();
	const [artist, setArtist] = useState();
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setRefresh(false);
		const fetchData = async () => {
			const result = await fetch(`http://localhost:3001/artists/${id}`);
			const json = await result.json();
			setArtist(json.artist);
		};
		fetchData();
	}, [refresh]);

	return (
		<div className='pageWrapper'>
			{artist && (
				<div className='artist'>
					<div className='artist__heading'>
						<small> ID: {artist.ID} </small>
						<Heading size={1}>Artist: {artist.name} </Heading>
					</div>

          <div>
          <Columns>
						<Columns.Column>
							<Heading size={3}> Albums: {artist.albums.length}</Heading>
							<List hoverable>
								{artist.albums.map((album) => (
									<List.Item>
										<Heading size={4}> {album.name} </Heading>
									</List.Item>
								))}
							</List>
						</Columns.Column>
            {
              artist.tracks && <Columns.Column>
							<Heading size={3}> Tracks: {artist.tracks.length}</Heading>
							<List hoverable>
								{artist.tracks.map((track) => (
									<List.Item>
										<Heading size={4}> {track.name} </Heading>
									</List.Item>
								))}
							</List>
						</Columns.Column>
            }
						
					</Columns>
          </div>
					
				</div>
			)}
		</div>
	);
};

export default Artist;
