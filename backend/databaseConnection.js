const typeorm = require("typeorm");

exports.makeConnection = async() => {
  try {
    return typeorm.getConnection();
  }
  catch {
    return typeorm.createConnection({
      type: "postgres",
      host: "localhost",
      port: '5432',
      username: "postgres",
      password: "admin",
      database: "musicStreaming",
      synchronize: true,
      entities: [
        "./api/entities/*.js"
      ]
    })
  }
}
