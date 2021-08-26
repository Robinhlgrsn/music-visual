<template>
  <div class="container mx-auto my-32">
    <section class="flex flex-col items-center border rounded-lg shadow-lg">
      <header class="text-5xl my-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        Upload
      </header>
      <AppForm />
    </section>
  </div>

</template>

<script>
import AppForm from '@/components/Form.vue'
export default {
  name: 'manage',
  components: {
    AppForm,
  },
}
</script>

<style>

</style>