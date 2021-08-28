<template>
  <div class="container mx-auto my-32">
    <section class="flex flex-col items-center border rounded-lg shadow-lg">
      <header class="py-1 text-5xl my-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        Upload
      </header>
      <AppForm />
    </section>
     <section class="flex flex-col items-center border my-10 rounded-lg shadow-lg" v-show="uploadedSongs.length > 0">
      <header class="py-1 text-5xl my-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        Songs
      </header>
      <div class="flex flex-col w-2/3" v-for="song in uploadedSongs" :key="song.id">
        <SongItem :artist="song.artist" :id="song.id" :title="song.songTitle" />
      </div>
    </section>
  </div>

</template>

<script>
import AppForm from '@/components/Form.vue';
import SongItem from '@/components/SongItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'manage',
  components: {
    AppForm,
    SongItem,
  },
  computed: {
    ...mapState(['uploadedSongs'])
  }
}
</script>

<style>

</style>