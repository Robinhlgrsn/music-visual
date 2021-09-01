const express = require('express');
const upload = require('../handlers/multer');
const songRouter = express.Router();

const { getAllSongs,
  addSong,
  deleteSong,
  uploadSong,
  updateSongInfo,
  getSongFile } = require('./songs.controller');

songRouter.get('/', getAllSongs);
songRouter.get('/:id', getSongFile);
songRouter.put('/:id', updateSongInfo);
songRouter.post('/', addSong);
songRouter.post('/uploads/:id', upload.single('songUpload'), uploadSong);
songRouter.delete('/:id', deleteSong);

module.exports = songRouter;