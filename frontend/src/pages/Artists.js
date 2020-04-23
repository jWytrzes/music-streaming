import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Card, Columns, Button } from 'react-bulma-components';
import Popup from '../components/Popup';

const Artists = ({history}) => {
  const [artists, setArtists] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/artists/');
      const json = await result.json();
      setArtists(json.artists);
    }
    fetchData();
  }, [refresh])

  const addArtist = async (data) => {
    const result = await fetch('http://localhost:3001/artists/', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        is_band: data.isBand
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

  const deleteArtist = async(id) => {
    const result = await fetch(`http://localhost:3001/artists/${id}`, {
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
    <div className="artists">
      <div className="artists__heading">
      <Heading size={1}> 
        Artists 
      </Heading>
      <Button color="success" onClick={() => setAddPopup(true)}> Add new artist + </Button>
      </div>
      
      { artists.length && artists.map(artist => (
          <Card key={artist.ID}>
            <Card.Content>
              <Columns>
                <Columns.Column size="one-quarter">
                  <small> ID: { artist.ID }  </small>
                  <Heading size={4}> {artist.name} </Heading>
                  <Heading subtitle size={6}> {artist.is_band ? 'Band' : 'Single Artist'} </Heading>
                </Columns.Column>
                <Columns.Column >
                  <div size={6}> Albums: {artist.albums.length} </div>
                  <div size={6}> Tracks: {artist.tracks.length} </div>
                </Columns.Column>
                <Columns.Column size="one-fifth">
                  <Button.Group className="artists__buttons">
                    <Button color="info" onClick={() => {
                      history.push(`/artists/${artist.ID}`)
                    }}> > </Button>
                    <Button color="danger" onClick={() => deleteArtist(artist.ID)}> X </Button>
                  </Button.Group>
                </Columns.Column>
              </Columns>
            </Card.Content>
          </Card>
        ))}
        {addPopup && <Popup closePopup={() => setAddPopup(false)} submit={addArtist}/> }
    </div>
  )
}

export default withRouter(Artists)
