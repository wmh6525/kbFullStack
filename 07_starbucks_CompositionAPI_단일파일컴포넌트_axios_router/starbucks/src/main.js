// import './assets/main.css';
//전역 CSS영역 : 부트스트랩추가
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

// createApp(App).mount('#app');
import router from './router'; //'./router/index.js'
const app = createApp(App); //vue인스턴스 생성
app.use(router); //vue인스턴스에 router등록
app.mount('#app');
