const typeorm = require("typeorm");

const ArtistSchema = new typeorm.EntitySchema({
  name: "artist",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    is_band: {
      type: "boolean",
      nullable: true,
    },
    name: {
      type: "varchar"
    }
  },
  relations: {
    albums: {
      target: "album",
      type: "one-to-many",
      inverseSide: "artist",
      onDelete: "CASCADE",
      nullable: true,
    },
    tracks: {
      target: "track",
      type: "one-to-many",
      inverseSide: "artist",
      onDelete: "CASCADE",
      nullable: true,
    }
  }
})

module.exports = ArtistSchema;