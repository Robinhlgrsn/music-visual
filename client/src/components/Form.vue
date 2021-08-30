<template>
<div>
    <form @submit.prevent="addSong" class="flex flex-col items-center p-10">
      <div class="mb-10">
        <input class="border py-1 px-4 mx-2 rounded font-bold" v-model="artist" placeholder="Artist" type="text">
        <input class="border py-1 px-4 mx-2 rounded font-bold" v-model="songTitle" placeholder="Song Title" type="text">
      </div>
      <div :class="{ 'bg-gradient-to-br from-pink-200 to-red-200 hover:from-pink-200 hover:to-red-200': activeHover }"
      @drag.prevent.stop=""
      @dragstart.prevent.stop=""
      @dragend.prevent.stop="activeHover = false"
      @dragover.prevent.stop="activeHover = true"
      @dragenter.prevent.stop="activeHover = true"
      @dragleave.prevent.stop="activeHover = false"
      @drop.prevent.stop="uploadSong($event)"
      class="flex justify-center rounded items-center border w-full h-10 p-10 bg-gray-50">Drop the song you want to upload here</div>
      <div v-show="this.uploadedFile">
        <p>{{ this.uploadedFile?.name }}</p>
      </div>
    <button class="border-2 my-3 py-1 px-4 rounded-full font-bold">Submit</button>
  </form>
  <section>

  </section>
</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Form',
  data() {
    return {
      activeHover: false,
        artist: null,
        songTitle: null,
        id: null,
        uploadedFile: null,
    };
  },
  methods: {
    uploadSong($event) {
      this.uploadedFile = null;
      this.activeHover = false;
      const submittedFile = $event.dataTransfer.files[0]
      console.log(submittedFile)
      this.uploadedFile = submittedFile
    },
    async addSong() {
      if (this.uploadedFile === null) {
       return console.log('select a file!');
      } 

      this.id = uuidv4()
      this.$store.dispatch('addNewSong', {
        id: this.id,
        artist: this.artist,
        songTitle: this.songTitle,
        originalTitle: this.uploadedFile.name,
        path: "path till filplatsen",
      });

      /* Send songupload to backend */
      const songFormData = new FormData();
      songFormData.set('songUpload', this.uploadedFile); 
      const response = await fetch(`http://localhost:3000/songs/uploads/${this.id}`, {
        method: 'POST',
        body: songFormData,
      });
      const data = await response.json();
      console.log(data)
      this.uploadedFile = null;
    }
  },
}
</script>

<style>

</style>