const mongoose = require("mongoose");

const GameDev = new mongoose.Schema({
    "link": String,
    "title": String
});

const mongModelGame = new mongoose.model("Game", GameDev);

module.exports = mongModelGame;