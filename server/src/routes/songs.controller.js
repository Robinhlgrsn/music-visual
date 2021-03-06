let songs = require('../model/songs.model');
const { unlink } = require('fs/promises')
const path = require('path');

function getAllSongs(req, res) {
  return res.status(200).json(songs);
}

 function getSongFile(req, res) {
  res.sendFile(req.params.id, {
    root: path.join(__dirname, '..', 'uploads'),
    headers: {
      "Content-Type": "audio/mpeg",
    },
  });
}

function addSong(req, res) {
  const song = req.body;
    if (!song.id || !song.artist || !song.songTitle || !song.originalTitle || !song.path) {
    return res.status(400).json({
      error: 'Missing required fields!'
    });
  } else {
    songs.push(req.body);
    console.log(req.body)
    return res.status(201).json(songs);
  }
}

function updateSongInfo(req, res) {
  console.log(req)
  const songIndex = (song) => song.id === req.body.id
  const index = songs.findIndex(songIndex)
  songs[index].artist = req.body.artist
  songs[index].songTitle = req.body.title
  res.status(200).json(songs);
}

function uploadSong(req, res) {
  if(!req.file || req.file.mimetype !== 'audio/mpeg') {
    res.status(404).json({
      error: 'Wrong format or missing file!'
    })
  }
  return res.status(200).json('Success!')
}

async function deleteSong(req, res) {

  try {
    await unlink(path.join(__dirname, '..', 'uploads', req.params.id));
  } catch (err) {
    res.status(500).json({ error: err });
  }
  const itemToRemove = songs.find((song) => song.id === req.params.id);
  if (itemToRemove) {
    songs = songs.filter(song => song.id !== itemToRemove.id);
    return res.status(200).json(songs);
  } else {
    return res.status(404).json({
      error: 'Songfile not found!',
    })
  }
}

module.exports = {
  addSong,
  uploadSong,
  deleteSong,
  getAllSongs,
  getSongFile,
  updateSongInfo,
};