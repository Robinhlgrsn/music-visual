<template>
  <div>
    <AppHeader />
    <router-view v-slot="{Component}">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component> 
    </transition>
    </router-view>
    <AppMusicPlayer />
  </div>
</template>

<script>
import AppMusicPlayer from '@/components/MusicPlayer.vue';
import AppHeader from '@/components/Header.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
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
