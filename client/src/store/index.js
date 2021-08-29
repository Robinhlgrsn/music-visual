import { createStore, storeKey } from 'vuex';

export default createStore({
  state: {
    selectOption: null,
    uploadedSongs: [],
  },
  mutations: {
    updateSongInfo(state, payload) {
      const songIndex = (song) => song.id === payload.id
      const index = state.uploadedSongs.findIndex(songIndex)

      state.uploadedSongs[index].artist = payload.artist
      state.uploadedSongs[index].songTitle = payload.title
    },
    removeUploadedSong(state, payload) {
      const updatedList = state.uploadedSongs.filter(song => song.id !== payload)
      state.uploadedSongs = updatedList
    },
    setImgOption(state, payload) {
      state.selectOption = payload
    },
    setSongs(state, payload) {
      console.log(payload)
      state.uploadedSongs = payload
    },
  },
  actions: {
    async getSongs({commit}) {
      const songRes = await fetch('http://localhost:3000/songs');
      const songData = await songRes.json();
      console.log(songData)
      commit('setSongs', songData)
    },
    updateSong({ commit }, payload)  {
      commit('updateSongInfo', payload)
    },
    removeSong({ commit }, payload) {
      commit('removeUploadedSong', payload.id)
    },
    async changeImgOption({ commit }, payload) {
      commit('setImgOption', payload)
    }
  },
  modules: {
  },
  getters: {

  }
});
