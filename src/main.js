import { createApp } from 'vue'
import "bootstrap"
import './style.scss'
import App from './App.vue'
import router from './router'

import Icon from './components/Icon.vue';


const app = createApp(App);

app.use(router);

// importing icon component globally
app.component('Icon', Icon);

app.mount('#app');
