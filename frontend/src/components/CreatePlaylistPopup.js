import React, { useState, useEffect } from 'react';
import { Button, Heading } from 'react-bulma-components';

const CreatePlaylistPopup = ({ submit, closePopup }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [users, setUsers] = useState('');
	const [userID, setUserID] = useState(undefined);

	useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/users/');
      const json = await result.json();
      setUsers(json.users);
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
					<Heading size={4}> Add new playlist </Heading>
					<form>
						<label htmlFor='#name'> Name: <span className="required">*</span> </label>
						<input type='text' value={name} id='name' onChange={(e) => setName(e.target.value)} />
						<br />
						<label htmlFor='#description'> Description: </label>
						<input type='text' value={description} id='description' onChange={(e) => setDescription(e.target.value)} />
						<br />
						<label htmlFor='#album'> Select user: <span className="required">*</span> </label>
						<select name='user' id='user' value={userID} onChange={(e) => setUserID(e.target.value)}>
              <option value={undefined}> Choose </option>
							{users && users.map((user) => <option key={user.ID} value={user.ID}>{user.firstName} {user.lastName}</option>)}
						</select>
						<br />
						<br />
					</form>
					<Button color='success' onClick={() => submit({ name, description, userID })}>
						Add
					</Button>
				</div>
			</div>
			<div className='popup__layer createAlbumPopup__layer'></div>
		</div>
	);
};

export default CreatePlaylistPopup;
