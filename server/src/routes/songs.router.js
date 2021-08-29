const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function(req, file, cb) {
    cb(null, req.params.id)
  }
});

const upload = multer({ storage: storage })
const { getAllSongs, addSong, deleteSong, uploadSong, updateSongInfo, getSongFile } = require('./songs.controller');
const songRouter = express.Router();

songRouter.get('/', getAllSongs);
songRouter.get('/:id', getSongFile)
songRouter.put('/:id', updateSongInfo)
songRouter.post('/', addSong);
songRouter.post('/uploads/:id', upload.single('songUpload'), uploadSong);
songRouter.delete('/:id', deleteSong);

module.exports = songRouter;