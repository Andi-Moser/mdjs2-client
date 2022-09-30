<script setup lang="ts">
const props = defineProps({
  icon: { type: String, required: true },
  size: { type: Number, default() { return 24 }}
})

</script>

<template>
  <component :is="icon + '-icon'" :size="size" />
</template>

<style scoped>

</style>
