import { createWebHistory, createRouter } from "vue-router";
import Playlist from '../views/Playlist.vue'

const routes = [
    {
        path: "/",
        name: "Playlist",
        component: Playlist,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;