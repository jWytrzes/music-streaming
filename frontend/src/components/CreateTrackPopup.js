import React, { useState, useEffect } from 'react';
import { Button, Heading } from 'react-bulma-components';

const CreateTrackPopup = ({ submit, closePopup }) => {
	const [name, setName] = useState('');
	const [duration, setDuration] = useState('');
	const [artists, setArtists] = useState('');
	const [albums, setAlbums] = useState('');
  const [genres, setGenres] = useState('');
  
	const [artistID, setArtistID] = useState('');
	const [albumID, setAlbumID] = useState('');
	const [genreID, setGenreID] = useState('');
  
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/artists/');
      const json = await result.json();
      setArtists(json.artists);

      const result2 = await fetch('http://localhost:3001/albums/');
      const json2 = await result2.json();
      setAlbums(json2.albums);

      const result3 = await fetch('http://localhost:3001/genres/');
      const json3 = await result3.json();
      setGenres(json3.genres);
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
						<label htmlFor='#duration'> Duration [sec]: </label>
						<input
							type='number'
							value={duration}
							id='duration'
							onChange={(e) => setDuration(e.target.value)}
						/>
						<br />
						<label htmlFor='#artist'> Select artist: </label>
						<select name='artist' id='artist' value={artistID} onChange={(e) => setArtistID(e.target.value)}>
              <option value=""> Choose </option>
							{artists && artists.map((artist) => <option key={artist.ID} value={artist.ID}>{artist.name}</option>)}
						</select>
						<br />
						<br />

            <label htmlFor='#genre'> Select genre: </label>
						<select name='genre' id='genre' value={genreID} onChange={(e) => setGenreID(e.target.value)}>
              <option value={null}> Choose </option>
							{genres && genres.map((genre) => <option key={genre.ID} value={genre.ID}>{genre.name}</option>)}
						</select>
						<br />
						<br />

            <label htmlFor='#album'> Select album: </label>
						<select name='album' id='album' value={albumID} onChange={(e) => setAlbumID(e.target.value)}>
              <option value={null}> Choose </option>
							{albums && albums.map((album) => <option key={album.ID} value={album.ID}>{album.name}</option>)}
						</select>
						<br />
						<br />
					</form>
					<Button color='success' onClick={() => submit({ name, duration, artistID, albumID, genreID })}>
						Add
					</Button>
				</div>
			</div>
			<div className='popup__layer createAlbumPopup__layer'></div>
		</div>
	);
};

export default CreateTrackPopup;
