import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';
import Login from '@/pages/Login.vue';
import Signup from '@/pages/Signup.vue';
import NotFound from '@/pages/NotFound.vue';
import Product from '@/pages/Product.vue';
const router = createRouter({
  history: createWebHistory(), //라이팅 모드설정
  routes: [
    //라우트 :path는 /소문자, component는 대문자로 시작하는 카멜케이스
    { path: '/', component: Home },
    // { path: '/products', component: Products },
    /*    
    { name: 'Products', path: '/products', component: Products }, //name라우트 <router-link to="/Products">음료</router-link>사용
    // { path: '/product', component: Product }, //URL이 http://localhost:5173/product?prodNo=C0003인 경우 currentRoute.query사용
    { path: '/product/:prodNo', component: Product }, //URL이 http://localhost:5173/product/C0003인 경우 currentRoute.param사용
*/
    {
      name: 'Products',
      path: '/products',
      component: Products,
      children: [{ path: '/product/:prodNo', component: Product }],
    },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
});
export default router;
