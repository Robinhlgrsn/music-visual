<template>
  <div>
    <AppHeader @my-option="getPhotos" />
    <router-view v-slot="{Component}">
    <transition name="slide" mode="out-in">
      <component :unsplashImg="img" :is="Component" :key="$route.path"></component> 
    </transition>
    </router-view>
    <AppMusicPlayer />
  </div>
</template>

<script>
import AppMusicPlayer from '@/components/MusicPlayer.vue';
import AppHeader from '@/components/Header.vue';
import { getUnsplashImgs } from './handlers/requests'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMusicPlayer,
  },
  emits: ['my-option'],
  data() {
    return {
      img: [],
    }
  },
  created() {
    this.getPhotos('music');
    this.$store.dispatch('getSongs');
  },
  methods: {
      async getPhotos(option) {
          let url = `query=${option}&&orientation=landscape&per_page=50`;
          const { results } = await getUnsplashImgs(url);
          this.img = results;
    },
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}
</style>
