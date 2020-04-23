import React, { useState } from 'react';
import { Button, Heading } from 'react-bulma-components';

const CreateGenrePopup = ({ submit, closePopup }) => {
	const [name, setName] = useState('');

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
					<Heading size={4}> Add new genre </Heading>
					<form>
						<label htmlFor='#name'> Name: <span className="required">*</span> </label>
						<input type='text' value={name} id='name' onChange={(e) => setName(e.target.value)} />
						<br />
					</form>
					<Button color='success' onClick={() => submit({ name })}>
						Add
					</Button>
				</div>
			</div>
			<div className='popup__layer createAlbumPopup__layer'></div>
		</div>
	);
};

export default CreateGenrePopup;
