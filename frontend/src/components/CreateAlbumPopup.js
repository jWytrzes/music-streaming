import React, { useState, useEffect } from 'react';
import { Button, Heading } from 'react-bulma-components';

const CreateTrackPopup = ({ submit, closePopup }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [release, setRelease] = useState('');
	const [artistID, setArtistID] = useState('');
	const [artists, setArtists] = useState('');
  
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/artists/');
      const json = await result.json();
      setArtists(json.artists);
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
					<Heading size={4}> Add new album </Heading>
					<form>
						<label htmlFor='#name'> Name: </label>
						<input type='text' value={name} id='name' onChange={(e) => setName(e.target.value)} />
						<br />
						<label htmlFor='#description'> Description: </label>
						<input
							type='text'
							value={description}
							id='description'
							onChange={(e) => setDescription(e.target.value)}
						/>
						<br />
						<label htmlFor='#release'> Release date: </label>
						<input
							type='date'
							value={release}
							id='release'
							onChange={(e) => setRelease(e.target.value)}
						/>
						<br />
						<br />
						<label htmlFor='#artist'> Select artist: </label>
						<select name='artist' id='artist' value={artistID} onChange={(e) => setArtistID(e.target.value)}>
              <option value=""> Choose </option>
							{artists && artists.map((artist) => <option key={artist.ID} value={artist.ID}>{artist.name}</option>)}
						</select>
						<br />
						<br />
					</form>
					<Button color='success' onClick={() => submit({ name, description, release, artistID })}>
						Add
					</Button>
				</div>
			</div>
			<div className='popup__layer createAlbumPopup__layer'></div>
		</div>
	);
};

export default CreateTrackPopup;
