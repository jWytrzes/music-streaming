import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Card, Columns, Button } from 'react-bulma-components';
import CreatePlaylistPopup from '../components/CreatePlaylistPopup';

const Playlists = ({history}) => {
  const [playlists, setPlaylists] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/playlists/');
      const json = await result.json();
      setPlaylists(json.playlists);
    }
    fetchData();
  }, [refresh])

  const addPlaylist = async (data) => {
    const result = await fetch('http://localhost:3001/playlists/', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        user: {
          ID: data.userID
        }
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

  const deletePlaylist = async(id) => {
    const result = await fetch(`http://localhost:3001/playlists/${id}`, {
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
        Playlists
      </Heading>
      <Button color="success" onClick={() => setAddPopup(true)}> Add new playlist + </Button>
      </div>
      <small> Quantity: {playlists.length} </small>
      
      { playlists &&playlists.length && playlists.map(playlist => (
          <Card key={playlist.ID}>
            <Card.Content>
              <Columns>
                <Columns.Column size="one-quarter">
                  <small> ID: { playlist.ID }  </small>
                  <Heading size={4}> {playlist.name} </Heading>
                </Columns.Column>
                <Columns.Column >
                  <div size={6}> Tracks: {playlist.tracks.length} </div>
                  <div size={6}> User: {playlist.user.firstName} {playlist.user.lastName} </div>
                </Columns.Column>
                <Columns.Column size="one-fifth">
                  <Button.Group className="artists__buttons">
                    <Button color="info" onClick={() => {
                      history.push(`/playlists/${playlist.ID}`)
                    }}> > </Button>
                    <Button color="danger" onClick={() => deletePlaylist(playlist.ID)}> X </Button>
                  </Button.Group>
                </Columns.Column>
              </Columns>
            </Card.Content>
          </Card>
        ))}
        {addPopup && <CreatePlaylistPopup closePopup={() => setAddPopup(false)} submit={addPlaylist}/> }
    </div>
  )
}

export default withRouter(Playlists)
