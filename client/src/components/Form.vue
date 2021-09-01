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
    <button v-if="!isLoading" class="border-2 my-3 py-1 px-4 rounded-full font-bold">Submit</button >
    <div class="my-3 py-1" v-else><AppSpinner /></div>
  <p class="text-red-500">{{isRequired}}</p>
  </form>
  <section>

  </section>
</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import AppSpinner from '@/components/Spinner.vue';

export default {
  name: 'Form',
  components: {
    AppSpinner,
  },
  data() {
    return {
      activeHover: false,
        artist: null,
        songTitle: null,
        id: null,
        uploadedFile: null,
        isLoading: false,
        isRequired: null,
    };
  },
  methods: {
    uploadSong($event) {
      this.uploadedFile = null;
      this.activeHover = false;
      const submittedFile = $event.dataTransfer.files[0]
      this.uploadedFile = submittedFile
    },
    async addSong() {
      this.id = uuidv4()
      if (!this.uploadedFile || !this.artist || !this.songTitle) {
       return this.isRequired = 'fields and file is required for upload.';
      } 
      try {
        this.isLoading = true;
        const response = await fetch(`http://localhost:3000/songs`, {
          method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
          body: JSON.stringify({
          id: this.id,
          artist: this.artist,
          songTitle: this.songTitle,
          originalTitle: this.uploadedFile.name,
          path: `http://localhost:3000/songs/${this.id}`,
          })
        });
        const songDetails = await response.json();
        setTimeout(() => {
          this.isLoading = false;
          this.$store.dispatch('addNewSong', songDetails);
        },1000)
      } catch (err) {
        console.log(err)
      }
      
      try {
        /* Send songupload to backend */
        const songFormData = new FormData();
        songFormData.set('songUpload', this.uploadedFile); 
        const uploadResponse = await fetch(`http://localhost:3000/songs/uploads/${this.id}`, {
          method: 'POST',
          body: songFormData,
        });
        const uploadData = await uploadResponse.json();
        console.log(uploadData)
      } catch (err) {
        console.log(err)
      }
      this.isRequired = null;
      this.uploadedFile = null;
      this.artist = null
      this.songTitle = null
    }
  },
}
</script>

<style>

</style>