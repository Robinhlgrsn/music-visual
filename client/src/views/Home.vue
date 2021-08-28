<template>
  <div>
    <transition name="fade" mode="in-out">
      <img class="object-cover absolute w-screen h-screen" :src="unsplashImg[0].urls.full" alt="" v-if="unsplashImg.length > 0" v-show="!flag">
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
      selectedMode: null
    }
  },
  components: {
  },

};
</script>

<style>
</style>
