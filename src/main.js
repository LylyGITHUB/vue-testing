import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

import './style.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
