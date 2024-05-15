const mongoose = require("mongoose");

const JavaScriptDev = new mongoose.Schema({
    "link": String,
    "title": String
});

const mongModelJs = new mongoose.model("Javascript", JavaScriptDev);

module.exports = mongModelJs;