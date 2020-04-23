import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Album from './pages/Album';
import Tracks from './pages/Tracks';
import Genres from './pages/Genres';
import Users from './pages/Users';
import Albums from './pages/Albums';
import Playlists from './pages/Playlists';

function App() {
  return (
    <Router>
      <div className="topBar">
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/artists"> Artists </Link></li>
            <li> <Link to="/albums"> Albums </Link></li>
            <li> <Link to="/tracks"> Tracks </Link></li>
            <li> <Link to="/genres"> Genres </Link></li>
            <li> <Link to="/playlists"> Playlists </Link></li>
            <li> <Link to="/users"> Users </Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/playlists/:id" component={Playlist}/>
        <Route exact path="/artists/" component={Artists}/>
        <Route path="/artists/:id" component={Artist}/>
        <Route exact path="/albums" component={Albums}/>
        <Route path="/albums/:id" component={Album}/>
        <Route exact path="/tracks" component={Tracks}/>
        <Route exact path="/genres" component={Genres}/>
        <Route path="/users" component={Users}/>
        <Route path="/playlists" component={Playlists}/>
      </Switch>
    </Router>
  );
}

export default App;
