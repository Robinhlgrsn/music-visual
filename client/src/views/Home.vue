<template>
  <div>
    <transition name="fade" mode="in-out">
      <img class="object-cover absolute w-screen h-screen" :src="unsplashImg[currentIndex].urls.full" alt="" v-if="unsplashImg.length > 0" v-show="!flag">
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props:['unsplashImg'],
  data() {
    return {
      img: [],
      currentIndex: 0,
      interval: null,
      flag: false,
    }
  },
  created() {
    
    this.interval = setInterval(() => {
      this.currentIndex++
    },5000)
 },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
  }
};
</script>

<style>
</style>
