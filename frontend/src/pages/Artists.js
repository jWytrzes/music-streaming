import React, { useState, useEffect } from 'react';
import { Heading, Card, Columns, Button } from 'react-bulma-components';
import { useFetch } from '../hooks'

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [data, loading] = useFetch(
    "http://localhost:3001/artists/"
  );

  useEffect(() => {
    setArtists(data.artists);
  }, [data])

  return (
    <div className="artists">
      <div className="artists__heading">
      <Heading size={1}> 
        Artists 
        
      </Heading>
      <Button color="success" onClick={() => setAddPopup(true)}> Add new artist + </Button>
      </div>
      
      {loading ? ("loading...") : 
      <div>
        { artists.map(artist => (
          <Card key={artist.ID}>
            <Card.Content>
              <Columns>
                <Columns.Column size="one-quarter">
                  <small> ID: { artist.ID }  </small>
                  <Heading size={4}> {artist.name} </Heading>
                  <Heading subtitle size={6}> {artist.isBand ? 'Band' : 'Single Artist'} </Heading>
                </Columns.Column>
                <Columns.Column >
                  <div subtitle size={6}> Albums: {artist.albums.length} </div>
                  <div subtitle size={6}> Tracks: {artist.tracks.length} </div>
                </Columns.Column>
                <Columns.Column size="one-fifth">
                  <Button.Group className="artists__buttons">
                    <Button color="info"> > </Button>
                    <Button color="danger"> X </Button>
                  </Button.Group>
                </Columns.Column>
              </Columns>
            </Card.Content>
          </Card>
        ))}
        {addPopup && <div> SIEMA </div>}
      </div>}
    </div>
  )
}

export default Artists
