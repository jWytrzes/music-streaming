const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const albumsRoutes = require('./api/routes/albums');
const artistsRoutes = require('./api/routes/artists');
const tracksRoutes = require('./api/routes/tracks');
const playlistsRoutes = require('./api/routes/playlists');
const genresRoutes = require('./api/routes/genres');
const usersRoutes = require('./api/routes/users');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
})

app.use('/albums', albumsRoutes);
app.use('/artists', artistsRoutes);
app.use('/tracks', tracksRoutes);
app.use('/playlists', playlistsRoutes);
app.use('/genres', genresRoutes);
app.use('/users', usersRoutes);

app.use((req, res, next) => {
  const error = new Error('Item not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    }
  });
});

module.exports = app;
