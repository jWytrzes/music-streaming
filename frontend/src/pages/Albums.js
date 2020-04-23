import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Card, Columns, Button } from 'react-bulma-components';
import CreateAlbumPopup from '../components/CreateAlbumPopup';

const Albums = ({history}) => {
  const [albums, setAlbums] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/albums/');
      const json = await result.json();
      setAlbums(json.albums);
    }
    fetchData();
  }, [refresh])

  const addAlbum = async (data) => {
    const result = await fetch('http://localhost:3001/albums/', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        artistID: data.artistID
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

  const deleteAlbum = async(id) => {
    const result = await fetch(`http://localhost:3001/albums/${id}`, {
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
        Albums
      </Heading>
      <Button color="success" onClick={() => setAddPopup(true)}> Add new album + </Button>
      </div>
      <small> Quantity: {albums.length} </small>
      
      { albums &&albums.length && albums.map(album => (
          <Card key={album.ID}>
            <Card.Content>
              <Columns>
                <Columns.Column size="one-quarter">
                  <small> ID: { album.ID }  </small>
                  <Heading size={4}> {album.name} </Heading>
                </Columns.Column>
                <Columns.Column >
                  <div size={6}> Tracks: {album.tracks.length} </div>
                  <div size={6}> Author: {album.artist.name} </div>
                </Columns.Column>
                <Columns.Column size="one-fifth">
                  <Button.Group className="artists__buttons">
                    <Button color="info" onClick={() => {
                      history.push(`/albums/${album.ID}`)
                    }}> > </Button>
                    <Button color="danger" onClick={() => deleteAlbum(album.ID)}> X </Button>
                  </Button.Group>
                </Columns.Column>
              </Columns>
            </Card.Content>
          </Card>
        ))}
        {addPopup && <CreateAlbumPopup closePopup={() => setAddPopup(false)} submit={addAlbum}/> }
    </div>
  )
}

export default withRouter(Albums)
