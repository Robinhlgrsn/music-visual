import { createStore, storeKey } from 'vuex';
import { Howl } from 'howler';
import { timeFormat } from '../handlers/time'

export default createStore({
  state: {
    selectOption: null,
    uploadedSongs: [],
    songPlaying: {},
    sound: {},
    seek: '00:00',
    duration: '00:00',
  },
  mutations: {
    updatePosition(state) {
      state.seek = timeFormat(state.sound.seek());
      state.duration = timeFormat(state.sound.duration());
    },
    updateSongInfo(state, payload) {
      state.uploadedSongs = payload
    },
    removeUploadedSong(state, payload) {
      
      state.uploadedSongs = payload
    },
    setImgOption(state, payload) {
      state.selectOption = payload;
    },
    setSongsList(state, payload) {
      state.uploadedSongs = payload;
    },
    addNewSong(state, payload) {
      state.uploadedSongs.push(payload)
    },
    playSelectedSong(state, payload) {
      state.songPlaying = payload;
      state.sound = new Howl({
        src: [payload.path],
        html5: true,
        format: ['mp3']
      });
    },
  },
  actions: {
    togglePlay({state}) {
      if (!state.sound.playing) {
        return;
      }
      if (state.sound.playing()) {
        state.sound.pause();
      } else {
        state.sound.play()
      }
    },
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
      commit('removeUploadedSong', data);
    },
    async changeImgOption({ commit }, payload) {
      commit('setImgOption', payload);
    },
    playSong({ commit, dispatch, state }, payload) {
      if (state.sound.playing) {
        state.sound.stop();
      }
      commit('playSelectedSong', payload);
      state.sound.play();
      this.state.sound.on('play', () => {
        requestAnimationFrame(() => {
          dispatch('progress')
        });
      });
    },
    progress({ commit, state, dispatch }) {
      commit('updatePosition');
      if (state.sound.playing()) {
        requestAnimationFrame(() => {
          dispatch('progress')
        });
      }
    },
  },
  modules: {
  },
  getters: {
    playing: (state) => {
      if(state.sound.playing) {
        return state.sound.playing();
      }
      return false
    }
  }
});
