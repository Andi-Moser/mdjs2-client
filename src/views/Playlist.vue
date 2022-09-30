<script lang="ts" setup>
import VSong from "../components/Elements/vSong.vue";
</script>

<template>
  <div class="flex flex-col h-full">
    <h1 class="text-xl text-center mb-8">Playlist</h1>
    <ul class="flex-1">
      <vSong name="In to deep" artist="Sum 41" album="Does this look infected?" votes="20" user="Andi" time="3:15" icon="play" />
      <vSong name="Still Waiting" artist="Sum 41" album="Does this look infected?" votes="15" user="Andi" time="3:45" icon="lock" />
      <vSong name="For whom the bell tolls" artist="Metallica" album="Metallica" votes="14" user="Andi" time="4:48" icon="check" />
      <vSong name="Enter Sandman" artist="Metallica" album="Metallica" votes="3" user="Wigi" time="3:02" icon="check" />
      <vSong name="Battery" artist="Metallica" album="Master of Puppets" votes="4" user="Wigi" time="5:20" icon="plus" />
      <vSong name="Master of Puppets" artist="Metallica" album="Master of Puppets" votes="1" user="Andi" time="6:02" icon="plus" />
    </ul>
    <div class="btn-group justify-center">
      <button class="btn">1</button>
      <button class="btn btn-active">2</button>
      <button class="btn">3</button>
      <button class="btn">4</button>
    </div>
  </div>
</template>