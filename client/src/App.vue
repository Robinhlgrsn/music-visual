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

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMusicPlayer,
  },
  emits: ['my-option'],
  data() {
    return {
      selectedMode: null,
      img: [],
    }
  },
  created() {
    this.getPhotos(undefined)
  },
  methods: {
      async getPhotos(option) {
        const API_KEY = "Client-ID"
        let url;
        if (option === undefined) {
          url = 'color=black_and_white&orientation=landscape&per_page=16'
        } else if(option === "2") {
          url = 'color=yellow&orientation=landscape&per_page=16'
        } else {
          url = 'color=red&orientation=landscape&per_page=16'
        }
        const fetchImages = await fetch(`https://api.unsplash.com/search/photos?page=1&query=music&${url}`, {
          method: 'GET',
          headers: {
            "Authorization": API_KEY
          }
        })
        const imageData = await fetchImages.json()
        console.log(imageData)
        const { results } = imageData
        this.img = results
    },
  },
  beforeUnmount() {
    clearInterval(this.interval)
    console.log('intervall cleared!')
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
