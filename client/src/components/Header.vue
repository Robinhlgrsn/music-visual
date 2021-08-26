<template>
  <header class="container mx-auto py-4">
    <nav class="flex justify-between items-center">
    <router-link to="/" exact-active-class="no active" class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
      Music
    </router-link>
    <button :class="{ 'text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600' : isActive }" class="border-2 py-1 px-4 rounded-full font-bold" @click.prevent="toggleRoutes()">
      {{ this.isActive ? 'Back' : 'Manage' }} 
    </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleRoutes() {
      if (this.isActive) {
        this.$router.push({ path: '/' });
        this.isActive = false;
      } else {
        this.isActive = true;
        this.$router.push({ path: '/manage' });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
