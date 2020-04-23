import React, { useState } from 'react';
import { Button, Heading } from 'react-bulma-components';

const CreateUserPopup = ({ submit, closePopup }) => {
	const [firstName, setName] = useState('');
	const [lastName, setLastname] = useState('');

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
					<Heading size={4}> Add new user </Heading>
					<form>
						<label htmlFor='#name'> First name: <span className="required">*</span></label>
						<input type='text' value={firstName} id='name' onChange={(e) => setName(e.target.value)} />
						<br />
            <label htmlFor='#lastname'> Last name: <span className="required">*</span></label>
						<input type='text' value={lastName} id='lastname' onChange={(e) => setLastname(e.target.value)} />
						<br />
					</form>
					<Button color='success' onClick={() => submit({ firstName, lastName })}>
						Add
					</Button>
				</div>
			</div>
			<div className='popup__layer createAlbumPopup__layer'></div>
		</div>
	);
};

export default CreateUserPopup;
