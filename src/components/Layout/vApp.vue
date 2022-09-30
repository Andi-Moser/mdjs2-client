<script setup lang="ts">
  import Topnav from "../Elements/Topnav.vue";
  import Botnav from "../Elements/Botnav.vue";
  import Sidenav from "../Elements/Sidenav.vue";
</script>

<template>
  <main class="h-full">
    <div class="drawer drawer-mobile">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <Topnav />

        <main class="p-4 flex justify-center main">
          <div class="max-w-[800px] w-full h-full">
            <slot />
          </div>
        </main>

        <Botnav />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <Sidenav />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
