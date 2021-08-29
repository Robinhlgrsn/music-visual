let songs = require('../model/songs.model');
const path = require('path');

function getAllSongs(req, res) {
  return res.status(200).json(songs);
}

function getSongFile(req, res) {
  console.log(req.params.id)
  res.sendFile(req.params.id, {
    root: path.join(__dirname, '..', '..', 'public', 'uploads'),
    headers: {
      "Content-Type": "audio/mpeg",
    },
  });
}

function addSong(req, res) {
  if (req.body) {
    songs.push(req.body)
    return res.status(200).json(req.body)
  } else {
    res.status(400).json('Error')
  }
}

function updateSongInfo(req, res) {
  const songIndex = (song) => song.id === req.body.id
  const index = songs.findIndex(songIndex)
  songs[index].artist = req.body.artist
  songs[index].songTitle = req.body.title

  res.status(200).json(songs);
}

function uploadSong(req, res) {
  console.log(req.file)
  res.status(200).json('Success!')
}

function deleteSong(req, res) {
  const itemToRemove = songs.find((song) => song.id === req.params.id);
  if (itemToRemove) {
    songs = songs.filter(song => song.id !== itemToRemove.id)
    console.log(songs)
    return res.status(200).json(itemToRemove);
  } else {
    return res.status(404).json({
      error: 'Did not find'
    })
  }
}

module.exports = {
  getAllSongs,
  addSong,
  uploadSong,
  deleteSong,
  updateSongInfo,
  getSongFile
};