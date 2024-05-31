const express = require('express');
const cors = require('cors')
require('dotenv').config();
const db = require('../database/connection')
db()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors);

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
})


