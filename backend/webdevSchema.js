const mongoose = require("mongoose");

const WebDev = new mongoose.Schema({
    "link": String,
    "title": String
});

const mongModelWeb = new mongoose.model("Web", WebDev);

module.exports = mongModelWeb;