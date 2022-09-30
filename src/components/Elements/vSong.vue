<script setup lang="ts">
const props = defineProps({
  icon: { type: String, required: true },
  name: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  votes: { type: String, required: true },
  user: { type: String, required: true },
  time: { type: String, required: true}
})
</script>

<template>
  <li class="flex items-center pb-6">
    <img class="mask mask-circle h-full object-cover mr-4" :src="'https://placeimg.com/40/40/' + name" />
    <div class="flex-1">
      <div class="font-bold">{{ name }} <span class="font-normal color-gray-200">{{ votes }} Votes</span></div>
      <div class="hidden sm:block">{{ album }}</div>
      <div class="block sm:hidden">{{ artist }}</div>
    </div>
    <div class="hidden sm:block w-64">
      {{ album }}
    </div>
    <div class="hidden lg:block w-16">
      {{ time }}
    </div>
    <div class="hidden xl:block w-16">
      {{ user }}
    </div>
    <button>
      <icon :icon="icon" :size="24" />
    </button>
  </li>
</template>

<style scoped>

</style>
