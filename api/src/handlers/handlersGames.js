const videoGames = require("../controllers/getGames")


const getVideoGames = ((req, res)=>{
    

    res.status(200).json(videoGames())
})

module.exports = getVideoGames