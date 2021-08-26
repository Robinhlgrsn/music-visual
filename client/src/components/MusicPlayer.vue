<template>
  <div class="bottom-0 flex justify-around items-center fixed min-w-full bg-gray-50 mx-auto">

    <section class="flex justify-center">
      Artist - Song title
    </section>

    <section class="flex items-center flex-col w-2/3 p-4">
      <button class="border shadow rounded-full my-5 h-12 w-12">
        <i class="fas fa-play pl-1.5 text-2xl"></i>
      </button>

      <div class="flex w-full">
        00:00
        <div class="flex w-full items-center rounded m-2 bg-gray-500">
          <div class="flex items-center relative rounded py-1 w-1/2 bg-gradient-to-r from-pink-400 to-red-500"></div>
            <div class="absolute left-2/4">
              <i class="fas fa-circle"></i>
            </div>
        </div>
        02:45
      </div>
    </section>

    <section class="flex justify-center">
      Volume scrub
    </section>

  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',
}
</script>
