import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Card, Columns, Button, List } from 'react-bulma-components';

const Album = () => {
	const { id } = useParams();
	const [album, setAlbum] = useState();
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setRefresh(false);
		const fetchData = async () => {
			const result = await fetch(`http://localhost:3001/albums/${id}`);
			const json = await result.json();
			setAlbum(json.album);
		};
		fetchData();
	}, [refresh]);

	return (
		<div className='pageWrapper'>
			{album && (
				<div className='artist'>
					<div className='artist__heading'>
						<small> ID: {album.ID} </small>
            <Heading size={1}>Album: "{album.name}"</Heading>
					</div>
          <small> Author: {album.artist.name} </small>
          <div>
          <Columns>
						<Columns.Column>
							<Heading size={3}> Tracks: {album.tracks.length}</Heading>
							<List hoverable>
								{album.tracks.map((track) => (
									<List.Item>
										<Heading size={4}> {track.name} </Heading>
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

export default Album;
