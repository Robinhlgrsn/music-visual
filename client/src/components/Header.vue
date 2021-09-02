<template>
  <header class="flex z-50 bg-gray-50 z-40 fixed top-0 inset-x-0 py-4">
    <nav class="flex container w-full justify-between items-center mx-auto">
      <router-link @click.prevent="isActive = false" to="/" exact-active-class="no active" 
      class="flex flex-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600
        md:4xl lg:text-5xl">
        Music Visual
      </router-link>
      <div class="flex flex-1 justify-end items-center">
        <div class="flex items-center mx-2 lg:mx-10">
          <i class="fas fa-camera-retro"></i> 
          <select @change="sendOption"  v-model="selected">
            <option default value="music">Music</option>
            <option value="retro">Retro</option>
            <option value="nature">Nature</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <AppButton
          :class="{ 'text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600' : isActive }"
          @click.prevent="toggleRoutes()">
          {{ this.isActive ? 'Back' : 'Manage' }}
        </AppButton>
      </div>
    </nav>
  </header>
</template>

<script>
import AppButton from '@/components/Button.vue';

export default {
  name: 'Header',
  data() {
    return {
      isActive: false,
      selected: null,
    };
  },
  created() {
    console.log(this.getRoute)
  },
  components: {
    AppButton,
  },
  computed: {
    getRoute() {
      return this.$router.currentRoute._value
    },
  },
  methods: {
    toggleRoutes() {
      if (this.isActive) {
        this.isActive = false;
        this.$router.push({ path: '/' });
      } else {
        this.isActive = true;
        this.$router.push({ path: '/manage' });
      }
    },
    sendOption() {
      this.$emit('my-option', this.selected)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
