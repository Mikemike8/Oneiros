const express = require('express');
const axios = require('axios');
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const mongModelPython = require("./mongoSchema");
const pythonData = require("./python.json");
const app = express();
app.use(cors());
app.use(express.json());
const uri = process.env.Connection_String;
let obj;

app.post('/', async (req, res) => {
    try {
        let storedData = []
        await mongoose.connect(uri);
        for (let i = 0; i < arr.length; i++) {
            obj = { "link": arr[i]};
            storedData.push(await mongModelPython.create(obj));
        }
        res.status(200).json(storedData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        await mongoose.disconnect();
        console.log("Server closed. Thanks for the request.")
    }
});

let arr = [];

function getLinks() {
    for (let i = 0; i < pythonData.Links.length; i++) {
        arr.push(pythonData.Links[i]);
    };
    console.log(arr);
};

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    getLinks();
    console.log(`Server is running on port ${PORT}`);
});