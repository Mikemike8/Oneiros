//Basic imports.
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");

//Schemas
const mongModelPython = require("./mongoSchema");
const webData = require("./webdevSchema");
const gameSchema = require("./gameSchema");

//Global variables
const app = express();
app.use(cors());
app.use(express.json());
const uri = process.env.Connection_String;
let arr = [];
const PORT = process.env.PORT || 3006;

//Functions
function getLinks(json) {
    for (let i = 0; i < json.Links.length; i++) {
        arr.push(json.Links[i]);
    };
    console.log("getLinks function ran.");
};


//POST route only used for pushing data into the db.
app.post('/post', async (req, res) => {
    try {
        let storedData = []
        await mongoose.connect(uri);
        for (let i = 0; i < arr.length; i++) {    
            storedData.push(await gameSchema.create(arr[i]));
        }
        res.status(200).json(storedData);
    } catch (e) {
        console.log("Error POSTing data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } finally {
        await mongoose.disconnect();
        console.log("Route closed. Thank you for the request.");
    }
});

//GET routes are for the front-end to recieve data.
app.get('/python', async (req, res) => {
    try {
        await mongoose.connect(uri);
        let storedData = await mongModelPython.find();
        res.status(200).json(storedData);
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } finally {
        await mongoose.disconnect();
        console.log("Route closed. Thank you for the request.");
    }
});

app.get('/webdev', async (req, res) => {
    try {
        await mongoose.connect(uri);
        let storedData = await webData.find();
        res.status(200).json(storedData);
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } finally {
        await mongoose.disconnect();
        console.log("Route closed. Thank you for the request.");
    }
});

app.listen(PORT, () => {
    //getLinks(gameData);
    console.log(`Server is running on port ${PORT}`);
});