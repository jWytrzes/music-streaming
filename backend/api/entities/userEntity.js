const typeorm = require("typeorm");

const EntitySchema = typeorm.EntitySchema({
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
    //song?
  }
})

module.exports = {
  EntitySchema
}