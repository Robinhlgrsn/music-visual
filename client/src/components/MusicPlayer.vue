<template>
  <div class="bottom-0 z-50 flex justify-around items-center fixed min-w-full bg-gray-50 mx-auto">
    <teleport to="#modaldiv" v-if="toggleModal">
      <AppModal @on-close="closeModal"  />
    </teleport>

    <section class="flex flex-1 justify-center">
      <button class="flex justify-center transition duration-500  rounded-xl transform hover:scale-110" :class="{'text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600' : toggleModal }" 
        @click.prevent="toggleModal = !toggleModal" >
        <i class="
          
          lg:text-6xl text-4xl fas fa-list"></i>
      </button> 
    </section>

    <section class="flex flex-1 items-center flex-col w-2/3 p-4">
      <button @click.prevent="togglePlay" class="border shadow rounded-full my-5 h-12 w-12">
        <i class="fas fa-play pl-1.5 text-2xl" v-if="!playing"></i>
        <i class="fas fa-pause pl-0.5 text-2xl" v-else></i>
      </button>

      <div class="flex font-bold">
          {{ seek }}
          /
         {{ duration }}
      </div>
    </section>

    <section class="flex flex-1 justify-center">
      <input 
        @input="changeVolume" v-model="playerVolume"
          min="0.0" max="1.0" step="0.01" type="range">
    </section>

  </div>
</template>

<script>
import AppModal from '@/components/Modal.vue';
import { mapActions, mapState, mapGetters } from 'vuex';
import { Howler } from 'howler';

export default {
  name: 'MusicPlayer',
  components: {
    AppModal,
  },
  emits:['on-close'],
  data() {
    return {
      toggleModal: false,
      playerVolume:0.5,
    };
  },
  computed: {
    ...mapState(['seek', 'duration']),
    ...mapGetters(['playing'])
  },
  methods: {
    ...mapActions(['togglePlay']),
    closeModal() {
    this.toggleModal = false;
    },
    changeVolume() {
      Howler.volume(this.playerVolume)
    },
  },
}
</script>
