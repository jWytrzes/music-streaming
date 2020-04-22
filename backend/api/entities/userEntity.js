const typeorm = require("typeorm");

const userSchema = new typeorm.EntitySchema({
  name: "user",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    firstName: {
      type: "varchar"
    },
    lastName: {
      type: "varchar"
    },
  },
  relations: {
    playlists: {
      target: "playlist",
      type: "one-to-many",
      inverseSide: "user",
      
    }
  }
})

module.exports = userSchema;