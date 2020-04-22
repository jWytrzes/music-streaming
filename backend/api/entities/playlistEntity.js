const typeorm = require("typeorm");

const EntitySchema = typeorm.EntitySchema({
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
    //user ID
    track: {
      target: "track",
      type: "many-to-many",
      inverseSide: "playlists",
      eager: true,
      cascade: true,
      onDelete: 'CASCADE',
    }
  }
})

module.exports = {
  EntitySchema
}