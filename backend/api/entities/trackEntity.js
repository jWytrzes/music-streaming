const typeorm = require('typeorm');

const trackSchema = new typeorm.EntitySchema({
	name: 'track',
	columns: {
		ID: {
			primary: true,
			type: 'int',
			generated: true,
		},
		name: {
			type: 'varchar',
		},
		duration: {
			type: 'int',
		},
	},
	relations: {
		album: {
			target: 'album',
			type: 'many-to-one',
			inverseSide: 'tracks',
			nullable: true,
		},
		artist: {
			target: 'artist',
			type: 'many-to-one',
			inverseSide: 'tracks',
			onDelete: 'CASCADE',
		},
		genre: {
			target: 'genre',
			type: 'many-to-one',
			inverseSide: 'tracks',
			nullable: true
		},
		playlists: {
			target: 'playlist',
			type: 'many-to-many',
			inverseSide: 'tracks',
			joinTable: true,
		},
	},
});

module.exports = trackSchema;
