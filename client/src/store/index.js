import { createStore, storeKey } from 'vuex';

export default createStore({
  state: {
    selectOption: null,
    uploadedSongs: [],
  },
  mutations: {
    updateSongInfo(state, payload) {
      state.uploadedSongs = payload
    },
    removeUploadedSong(state, payload) {
      const updatedList = state.uploadedSongs.filter(song => song.id !== payload)
      state.uploadedSongs = updatedList
    },
    setImgOption(state, payload) {
      state.selectOption = payload;
    },
    setSongsList(state, payload) {
      state.uploadedSongs = payload;
    },
    addNewSong(state, payload) {
      state.uploadedSongs.push(payload)
    }
  },
  actions: {
    async getSongs({commit}) {
      const songRes = await fetch('http://localhost:3000/songs');
      const songData = await songRes.json();
      commit('setSongsList', songData)
    },
    async addNewSong({ commit }, payload) {
        const response = await fetch('http://localhost:3000/songs', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        commit('addNewSong', data)
    },
    async updateSong({ commit }, payload)  {
      const response = await fetch(`http://localhost:3000/songs/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      commit('updateSongInfo', data)
    },
    async removeSong({ commit }, payload) {
      const response = await fetch(`http://localhost:3000/songs/${payload.id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      commit('removeUploadedSong', data.id)
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
