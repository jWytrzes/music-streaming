import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Album from './pages/Album';
import Track from './pages/Track';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div className="topBar">
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/artists"> Artists </Link></li>
            <li> <Link to="/users"> Users </Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/playlists/:id" component={Playlist}/>
        <Route exact path="/artists/" component={Artists}/>
        <Route path="/artists/:id" component={Artist}/>
        <Route path="/album/:id" component={Album}/>
        <Route path="/tracks/:id" component={Track}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </Router>
  );
}

export default App;
