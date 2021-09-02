const API_KEY = "";
const BASE_URL = 'http://localhost:3000';

export const getAllSongs = async () => {
  const songRes = await fetch(`${BASE_URL}/songs`);
  return await songRes.json();
}

export const editSong = async (newSongData) => {
  const response = await fetch(`${BASE_URL}/songs/${newSongData.id}`, {
    method: 'PUT',
    body: JSON.stringify(newSongData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const deleteSong = async (id) => {
  const response = await fetch(`${BASE_URL}/songs/${id}`, {
    method: 'DELETE',
  });
  return await response.json()
}

export const getUnsplashImgs = async (url) => {
  const fetchImages = await fetch(`https://api.unsplash.com/search/photos?page=1&${url}`, {
    method: 'GET',
    headers: {
      "Authorization": API_KEY
    }
  })
  return await fetchImages.json();
}
