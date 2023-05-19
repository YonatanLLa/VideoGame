require("dotenv").config();
const axios = require("axios");

const { API_KEY } = process.env;
const URL_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}`;
const {Videogame} = require("../db")
// busqueda total de API:

const videoGames = async () => {
	let character = [];
	let i = 1;
	while (i < 6) {
		let apiData = await axios(`${URL_GAMES}&page=${i}`);
		character.push(apiData);
		i++;
	}
	character = (await Promise.all(character)).map((char) =>
		char.data.results.map((elem) => {
			return {
				id: elem.id,
				name: elem.name,
				platforms: elem.platforms.map((platform) => platform.platform.name),
				background_image: elem.background_image,
				released: elem.released,
				rating: elem.rating,
				createdVideogame: false,
				genres: elem.genres.map((e) => e.name),
			};
		})
	);
	return character.flat();
};


const videoAllGames = async () =>{
	const gamesAllDBB = await Videogame.findAll()
	const gamesAllApi = await videoGames()

	return [...gamesAllDBB, ...gamesAllApi]
}



module.exports = videoAllGames;
