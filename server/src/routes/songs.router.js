const express = require('express');
const songs = require('../model/songs.model')
const songRouter = express.Router();

songRouter.get('/songs', (req, res) => {
  console.log(songs)
  console.log('response sent')
  res.status(200).json(songs);
  res.status(400).json({
    error: 'feleel'
  })
})

module.exports = songRouter;