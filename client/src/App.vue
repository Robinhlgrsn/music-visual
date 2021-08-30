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
      isLoading: false,
    }
  },
  created() {
    this.getPhotos(undefined);
    this.$store.dispatch('getSongs');
  },
  methods: {
      async getPhotos(option) {
        this.isLoading = true;
        try {
          const API_KEY = "Client-ID lU_jTDuxL1RXnVaEjSjM_UK4eI48LzcBLWIY98Gae44"
          let url;
          if (option === undefined) {
            url = 'query=music&color=black_and_white&orientation=landscape&per_page=50'
          } else if(option === "2") {
            url = 'query=retro&orientation=landscape&per_page=50'
          } else {
            url = 'query=summer&orientation=landscape&per_page=50'
          }
          const fetchImages = await fetch(`https://api.unsplash.com/search/photos?page=1&${url}`, {
            method: 'GET',
            headers: {
              "Authorization": API_KEY
            }
          })

          const imageData = await fetchImages.json();
          const { results } = imageData;
            this.img = results;
          console.log('request sent')
            this.isLoading = false;
        } catch (err) {
          console.log(err, 'nu blev det fel')
        }
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
