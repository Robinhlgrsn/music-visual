const express = require('express');
const cors = require('cors');

const app = express();
const songRouter = require('./routes/songs.router')

app.use(cors());
app.use(express.json());

/* Routes. */
app.use('/songs', songRouter)

module.exports = app;