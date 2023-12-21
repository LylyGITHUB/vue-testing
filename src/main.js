import { createApp } from 'vue';
import {router} from '@/route';
import App from './App.vue';

// 5. Create and mount the root instance.
const app = createApp(App)
app.use(router)
app.mount('#app')
