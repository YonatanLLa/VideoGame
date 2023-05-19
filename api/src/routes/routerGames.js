const {Router} = require("express")
const {handlerVideoGames, handlerGamesById} = require("../handlers/handlersGames")

const gamesRouter = Router()

// gamesRouter.post("/", handlerPostVideoGames)
gamesRouter.get("/", handlerVideoGames)
gamesRouter.get("/:id", handlerGamesById)
module.exports = gamesRouter;

