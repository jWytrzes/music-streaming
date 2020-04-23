const database = require("../../databaseConnection");
const userEntity = require("../entities/userEntity");

exports.getAllUsers = async (req, res, next) => {
  try {
    const connection = await database.makeConnection();
    const users = await connection.getRepository(userEntity).find({relations: ["playlists"]})
    res.status(200).json({ users });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const connection = await database.makeConnection();
    const user = await connection.getRepository(userEntity).findOne({relations: ["playlists"], where: {
      ID: id
    }} )
    user && res.status(200).json({ user });
    throw new Error("User not found");
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.addUser = async(req, res, next) => {
  try {
    const connection = await database.makeConnection();
    await connection.getRepository(userEntity).save(req.body);
    res.status(200).json({status:200, message: "User added" });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.deleteUser = async(req, res, next) => {
  try {
    const id = req.params.id;
    const connection = await database.makeConnection();
    const users = await connection.getRepository(userEntity);
    await users.delete(id);
    res.status(200).json({status:200, message: 'User deleted.' });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}
