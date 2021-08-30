<template>
  <header class="flex z-50 bg-gray-50 z-40 fixed top-0 inset-x-0 py-4">
    <nav class="flex container w-full justify-between items-center mx-auto">
    <router-link @click.prevent="isActive = false" to="/" exact-active-class="no active" class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
      Music
    </router-link>
    <div class="flex items-center">
      <div class="mx-10">        
        <select @change="sendOption"  v-model="selected">
          <option disabled value="0">picture mode</option>
          <option value="2">Retro</option>
          <option value="3">Summer</option>
        </select>
      </div>
      <button :class="{ 'text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600' : isActive }" class="border-2 py-1 px-4 rounded-full font-bold" @click.prevent="toggleRoutes()">
        {{ this.isActive ? 'Back' : 'Manage' }} 
      </button>
    </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isActive: false,
      selected: null,
    };
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
