require('dotenv').config();
const axios = require("axios")


const {API_KEY} = process.env
const URL_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}`


const videoGames = async () => {
    const response = (await axios(URL_GAMES)).data.results
    console.log(response)
}

module.exports = videoGames