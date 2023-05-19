const videoGames = require("../controllers/getGames");
const getGamesById = require("../controllers/getGamesById");
const getGamesByName = require("../controllers/getGamesByName");

// const handlerPostVideoGames = async (req, res) => {
// 	try {
// 		const { name, platforms, background_image, released, rating, genres, description, updated } =
// 			req.body;
// 	} catch (error) {
//         res.status(500).json({error: error.message})
//     }
// };

const handlerVideoGames = async (req, res) => {
	try {
		const { name } = req.query;

		const allGames = name ? await getGamesByName(name) : await videoGames();

		res.status(200).json(allGames);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const handlerGamesById = async (req, res) => {
	try {
		const { id } = req.params;
		const source = isNaN(id) ? "DDB" : "ID";
		const allGamesById = await getGamesById(id, source);
		res.status(200).json(allGamesById);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

// const getGames

module.exports = { handlerVideoGames, handlerGamesById };
