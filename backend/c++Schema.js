const mongoose = require("mongoose");

const cPlusPlusDev = new mongoose.Schema({
    "link": String,
    "title": String
});

const mongModelCplus = new mongoose.model("c++", cPlusPlusDev);

module.exports = mongModelCplus;