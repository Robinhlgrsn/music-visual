<template>
<div>
    <form class="flex flex-col items-center p-10">
      <div class="mb-10">
        <input class="border py-1 px-4 mx-2 rounded font-bold" v-model="form.artist" placeholder="Artist" type="text">
        <input class="border py-1 px-4 mx-2 rounded font-bold" v-model="form.songTitle" placeholder="Song Title" type="text">
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
    <button class="border-2 my-3 py-1 px-4 rounded-full font-bold">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      activeHover: false,
      form: {
        artist: null,
        songTitle: null,
      },
    };
  },
  methods: {
    uploadSong($event) {
      this.activeHover = false;
      const submittedFile = $event.dataTransfer.files[0]
      console.log(submittedFile)
      let req = new XMLHttpRequest();
      let formData = new FormData();
      
      formData.append("photo", submittedFile.name);                                
      req.open("POST", '/public');
      req.send(formData);
      
    },
  },
}
</script>

<style>

</style>