import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Card, Columns, Button } from 'react-bulma-components';
import CreateUserPopup from '../components/CreateUserPopup';

const Users = ({history}) => {
  const [users, setUsers] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/Users/');
      const json = await result.json();
      setUsers(json.users);
    }
    fetchData();
  }, [refresh])

  const addUser= async (data) => {
    const result = await fetch('http://localhost:3001/Users/', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        "Content-type": "application/json"
      }
    });
    const json = await result.json();
    if(json.status === 200) {
      setRefresh(true);
      setAddPopup(false);
    }else {
      alert('Coś poszło nie tak');
      setAddPopup(false);
    }
  }

  const deleteUser = async(id) => {
    const result = await fetch(`http://localhost:3001/Users/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      }
    });
    const json = await result.json();
    if(json.status === 200) {
      setRefresh(true);
    }else {
      alert('Coś poszło nie tak');
      setAddPopup(false);
    }
  }

  return (
    <div className="albums">
      <div className="albums__heading artists__heading">
      <Heading size={1}> 
        Users
      </Heading>
      <Button color="success" onClick={() => setAddPopup(true)}> Add new user + </Button>
      </div>
      
      { users &&users.length && users.map(user => (
          <Card key={user.ID}>
            <Card.Content>
              <Columns>
                <Columns.Column size="one-quarter">
                  <small> ID: { user.ID }  </small>
                  <Heading size={4}> {user.firstName} {user.lastName} </Heading>
                  <small>Playlists: {user.playlists.map(pl => pl.name + ', ')}</small>
                </Columns.Column>
                <Columns.Column></Columns.Column>
                <Columns.Column size="one-fifth">
                  <Button.Group className="artists__buttons">
                    <Button color="danger" onClick={() => deleteUser(user.ID)}> X </Button>
                  </Button.Group>
                </Columns.Column>
              </Columns>
            </Card.Content>
          </Card>
        ))}
        {addPopup && <CreateUserPopup closePopup={() => setAddPopup(false)} submit={addUser}/> }
    </div>
  )
}

export default withRouter(Users)
