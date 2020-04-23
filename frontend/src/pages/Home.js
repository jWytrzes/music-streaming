import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from 'react-bulma-components';
import { Container } from 'react-bulma-components';

const Home = () => {
  return (
    <Section>
      <Container>
        <div className="tiles">
          <div> <Link to="/artists"> Artists </Link> </div>
          <div> <Link to="/albums"> Albums</Link> </div>
          <div> <Link to="/tracks"> Tracks</Link> </div>
          <div> <Link to="/genres"> Genres</Link> </div>
          <div> <Link to="/playlists"> Playlists</Link> </div>
          <div> <Link to="/users"> Users </Link> </div>
        </div>
      </Container>
    </Section>
    
  )
}

export default Home
