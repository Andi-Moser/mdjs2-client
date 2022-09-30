<script setup lang="ts">
const props = defineProps({
  icon: { type: String, required: false },
  text: { type: String, required: true }
})

</script>

<template>
  <button class="btn gap-2 bg-transparent border-0">
    <slot name="icon">
      <icon :icon="icon" />
    </slot>
    {{ text }}
  </button>
</template>

<style scoped>

</style>