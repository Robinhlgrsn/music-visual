<template>
  <div class="my-animation my-border w-7 h-7 rounded-full border-4 "></div>
</template>

<script>
export default {
  name: 'Spinner',
}
</script>

<style>
  .my-border{
    animation: spinn 2s infinite;
    border-color:  red transparent red transparent;
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
</style>