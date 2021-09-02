const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const songRouter = require('./routes/songs.router')

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/songs', songRouter)

app.get('/*', (req, res) => {
  path.join(__dirname, '..', 'public', 'index.html')
})

module.exports = app;