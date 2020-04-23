import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Card, Columns, Button } from 'react-bulma-components';
import CreateGenrePopup from '../components/CreateGenrePopup';

const Genres = ({history}) => {
  const [genres, setGenres] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
    const fetchData = async() => {
      const result = await fetch('http://localhost:3001/genres/');
      const json = await result.json();
      setGenres(json.genres);
    }
    fetchData();
  }, [refresh])

  const addGenre= async (data) => {
    const result = await fetch('http://localhost:3001/genres/', {
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

  const deleteGenre = async(id) => {
    const result = await fetch(`http://localhost:3001/genres/${id}`, {
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
        Genres
      </Heading>
      <Button color="success" onClick={() => setAddPopup(true)}> Add new genre + </Button>
      </div>
      
      { genres &&genres.length && genres.map(genre => (
          <Card key={genre.ID}>
            <Card.Content>
              <Columns>
                <Columns.Column size="one-quarter">
                  <small> ID: { genre.ID }  </small>
                  <Heading size={4}> {genre.name} </Heading>
                </Columns.Column>
                <Columns.Column></Columns.Column>
                <Columns.Column size="one-fifth">
                  <Button.Group className="artists__buttons">
                    <Button color="danger" onClick={() => deleteGenre(genre.ID)}> X </Button>
                  </Button.Group>
                </Columns.Column>
              </Columns>
            </Card.Content>
          </Card>
        ))}
        {addPopup && <CreateGenrePopup closePopup={() => setAddPopup(false)} submit={addGenre}/> }
    </div>
  )
}

export default withRouter(Genres)
