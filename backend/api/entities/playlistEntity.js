const typeorm = require("typeorm");

const playlistSchema = new typeorm.EntitySchema({
  name: "playlist",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar"
    },
    description: {
      type: "varchar"
    },
  },
  relations: {
    user: {
      target: "user",
      type: "many-to-one",
      inverseSide: "playlists"
    },
    tracks: {
      target: "track",
      type: "many-to-many",
      inverseSide: "playlists",
      eager: true,
      cascade: true,
      //onDelete: 'CASCADE',
    },
    
  }
})

module.exports = playlistSchema;