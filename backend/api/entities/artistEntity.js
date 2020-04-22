const typeorm = require("typeorm");

const EntitySchema = new typeorm.EntitySchema({
  name: "artist",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    is_band: {
      type: "boolean"
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
      onDelete: "CASCADE"
    }
  }
})

module.exports = {
  EntitySchema
}