const mongoose = require("mongoose");

const Python = new mongoose.Schema({
    "link": String,
    "title": String
});

const mongModelPy = new mongoose.model("python", Python);

module.exports = mongModelPy;