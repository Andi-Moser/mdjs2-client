import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
//import 'vue-material-design-icons/styles.css';
import ListIcon from 'vue-material-design-icons/FormatListBulleted.vue';
import SearchIcon from 'vue-material-design-icons/Magnify.vue';
import SettingsIcon from 'vue-material-design-icons/CogOutline.vue';
import WaitlistIcon from 'vue-material-design-icons/ListStatus.vue';
import PlusIcon from 'vue-material-design-icons/PlusCircleOutline.vue';
import CheckIcon from 'vue-material-design-icons/Check.vue';
import LockIcon from 'vue-material-design-icons/LockOutline.vue';
import PlayIcon from 'vue-material-design-icons/PlayCircleOutline.vue';
import InformationIcon from 'vue-material-design-icons/InformationOutline.vue';
import Share from 'vue-material-design-icons/Share.vue';
import UsersIcon from 'vue-material-design-icons/AccountDetailsOutline.vue';
import UserIcon from 'vue-material-design-icons/AccountOutline.vue';
import ExitIcon from 'vue-material-design-icons/ExitRun.vue';

import vIcon from './components/Layout/vIcon.vue';
import vButton from './components/Layout/vButton.vue';
import router from "./startup/router";

const app = createApp(App)

app.component('icon', vIcon)
app.component('vButton', vButton)
app.component('list-icon', ListIcon)
app.component('search-icon', SearchIcon)
app.component('settings-icon', SettingsIcon)
app.component('waitlist-icon', WaitlistIcon)
app.component('plus-icon', PlusIcon)
app.component('check-icon', CheckIcon)
app.component('lock-icon', LockIcon)
app.component('play-icon', PlayIcon)
app.component('info-icon', InformationIcon)
app.component('share-icon', Share)
app.component('userlist-icon', UsersIcon)
app.component('user-icon', UserIcon)
app.component('exit-icon', ExitIcon)

app.use(router)

app.mount('#app')
