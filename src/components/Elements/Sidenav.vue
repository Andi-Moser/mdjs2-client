<script lang="ts" setup>
  import image from "./../../assets/logo.png"
  import {ref} from "vue";

  const rooms = ref([
    {
      id: 1,
      name: 'Geburiparty Elias',
      isAdmin: false
    },
    {
      id: 2,
      name: 'Piratenparty',
      isAdmin: true
    },
    {
      id: 3,
      name: 'Old-School-HipHop',
      isAdmin: true
    },
    {
      id: 4,
      name: 'Test lokal',
      isAdmin: true
    },
    {
      id: 5,
      name: 'Daydrinking 2022',
      isAdmin: false
    }
  ])

  const selectedRoom = ref(
      {
        id: 2,
        name: 'Piratenparty',
        isAdmin: true
      }
  )
</script>

<template>
  <div class="menu overflow-y-auto w-80 bg-base-100 border-r p-4 h-full">

<!--    <div class="hidden lg:flex w-full navbar bg-base-300">-->
<!--      <span>Piratenparty</span>-->
<!--    </div>-->

    <div class="flex justify-center pb-8">
      <img :src="image" class="w-1/2" />
    </div>
    <!-- Sidebar content here -->
    <ul>
      <li class="pb-8">
        <select class="bg-black text-white" v-model="selectedRoom">
          <option value="">Raum wechseln...</option>
          <option v-for="room in rooms" :key="room.id" :value="room">
             {{ room.name }} <span v-if="room.isAdmin">(dein Raum)</span>
          </option>
        </select>
      </li>
      <li>
        <div><icon icon="user" :size="24" /> Dein Profil</div>
      </li>
      <li v-if="selectedRoom.isAdmin">
        <div><icon icon="settings" :size="24" /> Raum Einstellungen</div>
      </li>
      <li v-if="selectedRoom.isAdmin">
        <div><icon icon="waitlist" :size="24" /> Warteliste</div>
      </li>
      <li v-if="selectedRoom.isAdmin">
        <div><icon icon="userlist" :size="24" /> Benutzerliste</div>
      </li>
      <li>
        <div><icon icon="share" :size="24" /> Benutzer einladen</div>
      </li>
    </ul>
    <ul class="flex flex-col justify-end h-full">
      <li>
        <div class="text-green-600"><icon icon="plus" :size="24" /> Neuen Raum erstellen</div>
      </li>
      <li>
        <div class="text-red-600"><icon icon="exit" :size="24" /> Aktuellen Raum verlassen</div>
      </li>
    </ul>
  </div>
</template>