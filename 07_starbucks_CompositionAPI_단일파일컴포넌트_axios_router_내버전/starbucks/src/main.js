// import './assets/main.css';
import router from '@/router/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App); // Vue 인스턴스 생성
app.use(router); // Vue인스턴스에 router 등록
app.mount('#app');
