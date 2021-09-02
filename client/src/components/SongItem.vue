<template>
  <div>
    <div class="flex border justify-between px-5 mx-4 my-2 py-1" v-show="!isEditing">
      <div class="flex">
      <h1 class="font-bold mx-2">{{artist}}</h1>
        -
      <p class="mx-2">{{title}}</p>
      </div>
      <div>
        <i  @click.prevent="isEditing = !isEditing" class="
        transition duration-500 ease-in-out hover:bg-gray-200 transform hover:scale-110
        mx-4 rounded-xl fas cursor-pointer fa-pencil-alt"></i>
        <i @click.prevent="removeSong(id)" class="
        transition duration-500 ease-in-out hover:bg-gray-200 transform hover:scale-110
        rounded-xl cursor-pointer text-red-500 fas fa-times"></i>
      </div>
    </div>
      <form @submit.prevent="updateSong(id)" class="flex border justify-between px-5 mx-4 my-2 py-1" v-show="isEditing">
        <div class="flex flex-col">
          <input v-model="updatedArtist" class="border py-1 px-4 mx-2 rounded font-bold" placeholder="Artist" type="text">
          <input v-model="updatedTitle" class="border py-1 px-4 mx-2 rounded font-bold" placeholder="Song Title" type="text">
        </div>
        <div class="flex flex-col">
          <button class="border-2 py-1 px-4 rounded-full font-bold" >Save</button>
          <button class="border-2 py-1 px-4 rounded-full font-bold" @click.prevent="isEditing = !isEditing">Back</button>
        </div>
      </form>
  <div>

  </div>
</div>

</template>

<script>

export default {
  name: 'SongItem',
  data() {
    return {
      isEditing: false,
      updatedArtist: null,
      updatedTitle: null,
    }
  },
  props: {
    artist: String,
    title: String,
    id: String,
  },
  methods: {
    updateSong(id) {
      console.log(this.updatedArtist)
      console.log(this.updatedTitle)
      this.$store.dispatch('updateSong', {
        id,
        artist: this.updatedArtist,
        title: this.updatedTitle
      })
      this.isEditing = false; 
    },
    removeSong(id) {
      this.$store.dispatch('removeSong', { id });
    },
  }
}
</script>

<style>

</style>