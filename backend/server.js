const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const API = process.env.API_KEYS
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
