<template>
  <div class="spinn-animation border-2 rounded-full">
  <div class="reverse-animation bg-gradient-to-br from-pink-400 to-red-600
   w-8 h-8 rounded-full ">
  </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
}
</script>

<style>
  .spinn-animation{
    animation: spinn 1s ease-in-out infinite;
    border-color:#F472B6 transparent transparent transparent;
  }
    @keyframes spinn {
      from 
      {
        transform: rotate(0deg);
      } 
      to
      {
        transform: rotate(360deg);  
      }
    }

  .reverse-animation{
    animation: reverse-spinn 2s infinite;
    
  }
    @keyframes reverse-spinn {
      from 
      {
        transform: rotate(360deg);
      } 
      to
      {
        transform: rotate(0deg);  
      }
    }
</style>