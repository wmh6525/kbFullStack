import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';
import Signup from '@/pages/Signup.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/pages/NotFound.vue';
import Product from '@/pages/Product.vue';

const router = createRouter({
  history: createWebHistory(), //라우팅 모드 설정 => 뒤로가기 앞으로가기
  routes: [
    { path: '/', component: Home }, // 라우트 path는 /소문자, comonent는 대문자로 시작하는 카멜케이스
    { name: 'Products', path: '/products', component: Products }, // 라우트
    { name: 'Product', path: '/product/:prodNo', component: Product }, //
    { name: 'Login', path: '/login', component: Login }, //
    { name: 'Signup', path: '/signup', component: Signup }, //
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
