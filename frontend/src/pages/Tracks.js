import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Card, Columns, Button } from 'react-bulma-components';
import CreateTrackPopup from '../components/CreateTrackPopup';
import AddToPLPopup from '../components/AddToPLPopup';

const Tracks = ({ history }) => {
	const [tracks, setTracks] = useState([]);
	const [addPopup, setAddPopup] = useState(false);
	const [addToPLPopup, setAddToPLPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [trackID, setTrackID] = useState(-1);

	useEffect(() => {
		setRefresh(false);
		const fetchData = async () => {
			const result = await fetch('http://localhost:3001/Tracks/');
			const json = await result.json();
			setTracks(json.tracks);
		};
		fetchData();
	}, [refresh]);

	const addTrack = async (data) => {
		const result = await fetch('http://localhost:3001/Tracks/', {
			method: 'POST',
			body: JSON.stringify({
				...data,
				artistID: data.artistID,
				artistID: data.artistID,
				artistID: data.artistID,
			}),
			headers: {
				'Content-type': 'application/json',
			},
		});
		const json = await result.json();
		if (json.status === 200) {
			setRefresh(true);
			setAddPopup(false);
		} else {
			alert('Coś poszło nie tak');
			setAddPopup(false);
		}
	};

	const deleteTrack = async (id) => {
		const result = await fetch(`http://localhost:3001/Tracks/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
			},
		});
		const json = await result.json();
		if (json.status === 200) {
			setRefresh(true);
		} else {
			alert('Coś poszło nie tak');
			setAddPopup(false);
		}
	};

	const addToPlaylist = async (playlistID) => {
		const result = await fetch(`http://localhost:3001/tracks/${trackID}`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
      },
      body: JSON.stringify({
        playlistToAdd: playlistID
      })
		});
		const json = await result.json();
		if (json.status === 200) {
			setRefresh(true);
		} else {
			alert('Coś poszło nie tak');
			setAddPopup(false);
    }
    
    const result2 = await fetch(`http://localhost:3001/playlists/${playlistID}`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
      },
      body: JSON.stringify({
        trackList: [trackID]
      })
		});
		const json2 = await result2.json();
		if (json2.status === 200) {
      setRefresh(true);
      setAddToPLPopup(false);
		} else {
			alert('Coś poszło nie tak');
			setAddToPLPopup(false);
		}
  };

	return (
		<div className='albums'>
			<div className='albums__heading artists__heading'>
				<Heading size={1}>Tracks</Heading>
				<Button color='success' onClick={() => setAddPopup(true)}>
					Add new track +
				</Button>
			</div>

			{tracks &&
				tracks.length &&
				tracks.map((track) => (
					<Card key={track.ID}>
						<Card.Content>
							<Columns>
								<Columns.Column size='one-quarter'>
									<small> ID: {track.ID} </small>
									<Heading size={4}> {track.name} </Heading>
									<small> Author: {track.artist.name} </small>
								</Columns.Column>
								<Columns.Column>
									<div size={6}> Duration: {track.duration} </div>
									<div size={6}> Genre: {track.genre ? track.genre.name : 'no data'} </div>
									<div size={6}> Album: {track.album ? track.album.name : 'no data'} </div>
								</Columns.Column>
								<Columns.Column size='one-fifth'>
									<Button.Group className='artists__buttons'>
										<Button
											color='info'
											onClick={() => {
												setAddToPLPopup(true);
												setTrackID(track.ID);
											}}
										>
											Add to playlist
										</Button>
										<Button color='danger' onClick={() => deleteTrack(track.ID)}>
											X
										</Button>
									</Button.Group>
								</Columns.Column>
							</Columns>
						</Card.Content>
					</Card>
				))}
			{addPopup && <CreateTrackPopup closePopup={() => setAddPopup(false)} submit={addTrack} />}
			{addToPLPopup && <AddToPLPopup closePopup={() => setAddToPLPopup(false)} submit={addToPlaylist} trackID={trackID}/>}
		</div>
	);
};

export default withRouter(Tracks);
