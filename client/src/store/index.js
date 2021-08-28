import { createStore, storeKey } from 'vuex';

export default createStore({
  state: {
    selectOption: null,
    uploadedSongs: [
      {
        artist: "StereoFloat",
        id: "1b4b818f-3cb4-460c-b9d2-7103f305f256",
        originalTitle: "STEREOFLOAT - One-Way Mirrors.mp3",
        path: "http://localhost:3000/song/1b4b818f-3cb4-460c-b9d2-7103f305f256",
        songTitle: "One-Way Mirror"
      },
      {
        artist: "2nd Song",
        id: "1b4b818f-3cb4-460c-b9d2-7103f35f256",
        originalTitle: "STEREOFLOAT - One-Way Mirrors.mp3",
        path: "http://localhost:3000/song/1b4b818f-3cb4-460c-b9d2-7103f305f256",
        songTitle: "One-Way Mirror"
      },
    ],
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
  },
  actions: {
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
