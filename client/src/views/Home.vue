<template>
  <div>
    <transition name="fade" mode="in-out">
      <img class="object-cover absolute w-screen h-screen" 
        :src="unsplashImg[currentIndex].urls?.full" alt="" 
        v-if="unsplashImg.length > 0" v-show="!flag">
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props:['unsplashImg'],
  data() {
    return {
      currentIndex: 0,
      interval: null,
      flag: false,
    }
  },
  async created() {
    this.interval = setInterval(() => {
        this.currentIndex = Math.floor(Math.random() * this.unsplashImg.length);
    },5000)
 },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
