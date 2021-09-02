import { createStore, storeKey } from 'vuex';
import { Howl } from 'howler';
import { timeFormat } from '../handlers/time'
import { getAllSongs, editSong, deleteSong } from '../handlers/requests'

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
    setImgOption(state, payload) {
      state.selectOption = payload;
    },
    updateSongInfo(state, payload) {
      state.uploadedSongs = payload
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
      const songData = await getAllSongs();
      commit('updateSongInfo', songData);
    },
    async addNewSong({ commit }, payload) {
      commit('updateSongInfo', payload)
    },
    async updateSong({ commit }, payload)  {
      const data = await editSong(payload)
      commit('updateSongInfo', data)
    },
    async removeSong({ commit }, payload) {
        const data = await deleteSong(payload.id)
        commit('updateSongInfo', data);
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
