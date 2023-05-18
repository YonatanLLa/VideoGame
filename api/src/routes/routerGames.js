const {Router} = require("express")
const getVideoGames = require("../handlers/handlersGames")

const gamesRouter = Router()

gamesRouter.get("/", getVideoGames)

module.exports = gamesRouter;

