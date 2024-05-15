const mongoose = require("mongoose");

const cssSchema = new mongoose.Schema({
    "link": String,
    "title": String
});

const mongModelcss = new mongoose.model("css", cssSchema);

module.exports = mongModelcss;