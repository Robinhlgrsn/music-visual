<template>
  <div>
    <router-view></router-view>
    <AppMusicPlayer />
  </div>
</template>

<script>
import AppMusicPlayer from '@/components/MusicPlayer.vue';

export default {
  name: 'App',
  components: {
    AppMusicPlayer,
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
</style>
