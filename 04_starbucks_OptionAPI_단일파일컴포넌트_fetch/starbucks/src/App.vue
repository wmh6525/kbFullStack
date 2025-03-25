<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Products from './components/Products.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: { Header, Footer, Products, Signup, Login },
};
</script>

<template>
  <div>
    <Header />
    <section>
      <article>
        내용
        <!-- <Signup /> -->
        <Products />
        <!-- <div id="map" style="width: 100%; height: 95%; border: 1px solid"></div> -->
        <!-- <Login /> -->
      </article>
      <aside>광고</aside>
    </section>
  </div>
  <Footer />
</template>
<style scoped></style>
