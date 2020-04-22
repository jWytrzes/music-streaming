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
      inverseSide: "playlists",
      nullable: false,
      onDelete: 'CASCADE'
    },
    tracks: {
      target: "track",
      type: "many-to-many",
      inverseSide: "playlists",
      eager: true,
      cascade: true,
    },
    
  }
})

module.exports = playlistSchema;