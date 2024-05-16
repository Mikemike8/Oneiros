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
const jsData = require("./jsSchema") 
const cPlusData = require("./c++Schema");
const cssData = require("./cssSchema");

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

async function sending(Schema, resp) {
    storedData = await Schema.find();
    resp.status(200).json(storedData);
};

//POST route only used for pushing data into the db.
app.post('/post', async (req, res) => {
    try {
        let storedData = []
        await mongoose.connect(uri);
        for (let i = 0; i < arr.length; i++) {    
            storedData.push(await cssData.create(arr[i]));
        }
        res.status(200).json(storedData);
    } catch (e) {
        console.log("Error POSTing data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } 
    // finally {
    //     await mongoose.disconnect();
    //     console.log("Route closed. Thank you for the request.");
    // }
});

//GET routes are for the front-end to recieve data.
app.get('/python', async (req, res) => { //✔️
    try {
        let storedData;
        await mongoose.connect(uri).then(sending(mongModelPython, res));
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } 
    // finally {
    //     await mongoose.disconnect();
    //     console.log("Route closed. Thank you for the request.");
    // }
});

app.get('/webdev', async (req, res) => { //✔️
    try {
        let storedData;
        await mongoose.connect(uri).then(sending(webData, res));
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } 
    // finally {
    //     await mongoose.disconnect();
    //     console.log("Route closed. Thank you for the request.");
    // }
});

app.get('/gamedev', async (req, res) => { //✔️
    try {
        let storedData;
        await mongoose.connect(uri).then(sending(gameSchema, res));
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } 
    // finally {
    //     await mongoose.disconnect();
    //     console.log("Route closed. Thank you for the request.");
    // }
});

app.get('/', async (req, res) => { //✔️
    try {
        let storedData;
        await mongoose.connect(uri).then(sending(jsData, res));
        // storedData = await jsData.find();
        // res.status(200).json(storedData);
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } 
    // finally {
    //     await mongoose.disconnect();
    //     console.log("Route closed. Thank you for the request.");
    // }
});

app.get('/cPlusPlusDev', async (req, res) => { //✔️
    try {
        let storedData;
        await mongoose.connect(uri).then(sending(cPlusData, res));
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } 
    // finally {
    //     await mongoose.disconnect();
    //     console.log("Route closed. Thank you for the request.");
    // }
});

app.get('/css', async (req, res) => { //✔️
    try {
        let storedData;
        await mongoose.connect(uri).then(sending(cssData, res));
    } catch(e) {
        console.log("Error GETting data.");
        console.log(e);
        res.status(500).json({ e: "Internal Server Error" });
    } 
    // finally {
    //     await mongoose.disconnect();
    //     console.log("Route closed. Thank you for the request.");
    // }
});

app.listen(PORT, () => {
    //getLinks(cssJson);
    console.log(`http://localhost:${PORT}`);
});