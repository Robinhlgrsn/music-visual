const express = require('express');
const upload = require('../handlers/multer');
const songRouter = express.Router();

const { getAllSongs,
  addSong,
  deleteSong,
  uploadSong,
  updateSongInfo,
  getSongFile } = require('./songs.controller');

songRouter.post('/', addSong);
songRouter.get('/', getAllSongs);
songRouter.get('/:id', getSongFile);
songRouter.delete('/:id', deleteSong);
songRouter.put('/:id', updateSongInfo);
songRouter.post('/uploads/:id', upload.single('songUpload'), uploadSong);

module.exports = songRouter;