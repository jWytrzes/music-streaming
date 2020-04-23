import React, { useState, useEffect } from 'react';
import { Button, Heading } from 'react-bulma-components';

const CreatePlaylistPopup = ({ submit, closePopup }) => {
	const [playlists, setPlaylists] = useState('');
	const [playlistID, setPlaylistID] = useState(undefined);

	useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/playlists/');
      const json = await result.json();
      setPlaylists(json.playlists);
    }
    fetchData();
  }, [])

	return (
		<div className='popup createAlbumPopup'>
			<div className='popup__body createAlbumPopup__body'>
				<Button
					className='popup__closeBtn createAlbumPopup__closeBtn'
					color='info'
					onClick={closePopup}
				>
					X
				</Button>
				<br />
				<div>
					<Heading size={4}> Choose playlist </Heading>
					<form>
						<label htmlFor='#pl'> Select playlist: </label>
						<select name='pl' id='pl' value={playlistID} onChange={(e) => setPlaylistID(e.target.value)}>
              <option value={undefined}> Choose </option>
							{playlists && playlists.map((pl) => <option key={pl.ID} value={pl.ID}>{pl.name}</option>)}
						</select>
						<br />
						<br />
					</form>
					<Button color='success' onClick={() => submit(playlistID)}>
						Add
					</Button>
				</div>
			</div>
			<div className='popup__layer createAlbumPopup__layer'></div>
		</div>
	);
};

export default CreatePlaylistPopup;
