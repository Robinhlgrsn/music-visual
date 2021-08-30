<template>
<div class="z-40 flex justify-center items-center fixed left-0 top-0 h-screen w-screen bg-gray-900 bg-opacity-50 backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200">
  <div class="flex flex-col container mx-auto text-gray-50 right-0 left-0 z-50  bg-opacity-50 h-96">
    <div v-for="(song, index) in uploadedSongs" :key="song.id" >
      <div @click.prevent="playSong(song); removeModal();"
        class="flex justify-center shadow-lg mb-4 rounded-lg p-2 text-6xl 
          hover:bg-gray-100 hover:bg-opacity-25 cursor-pointer
          transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <h1 class="mr-6">{{index + 1}}.</h1>
        <h1 class="mr-6">{{song.artist}}</h1>
        -
        <h1 class="ml-6">{{song.songTitle}}</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Modal',
  computed: {
      ...mapState(['uploadedSongs'])
  },
  methods: {
    playSong(song) {
      this.$store.dispatch('playSong', song)
    },
    removeModal() {
      this.$emit('onClose')
    }
  },
}
</script>