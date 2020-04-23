const database = require('../../databaseConnection');
const artistEntity = require('../entities/artistEntity');

exports.getAllArtists = async (req, res, next) => {
	try {
		const connection = await database.makeConnection();
		const artists = await connection
			.getRepository(artistEntity)
			.find({ relations: ['albums', 'tracks'] });
		// const artists = await connection.createQueryBuilder("artist").innerJoinAndSelect("artist, artist.name").orderBy("artist.name", "ASC").getMany();
		res.status(200).json({ artists });
	} catch (error) {
		res.status(error.status || 500).json({
			message: error.message,
		});
	}
};

exports.getArtist = async (req, res, next) => {
	const id = req.params.id;
	try {
		const connection = await database.makeConnection();
		const artist = await connection.getRepository(artistEntity).findOne({
			relations: ['albums', 'tracks'],
			where: {
				ID: id,
			},
		});
		artist && res.status(200).json({ artist });
		throw new Error('Artist not found');
	} catch (error) {
		res.status(error.status || 500).json({
			message: error.message,
		});
	}
};

exports.addArtist = async (req, res, next) => {
	try {
		const connection = await database.makeConnection();
		await connection.getRepository(artistEntity).save(req.body);
		res.status(200).json({ status: 200, message: 'Artist added' });
	} catch (error) {
		res.status(error.status || 500).json({
			message: error.message,
		});
	}
};

exports.deleteArtist = async (req, res, next) => {
	const id = req.params.id;
	try {
		const connection = await database.makeConnection();
		await connection.getRepository(artistEntity).delete(id);
		res.status(200).json({ status: 200, message: 'Artist deleted.' });
	} catch (error) {
		res.status(error.status || 500).json({
			message: error.message,
		});
	}
};
