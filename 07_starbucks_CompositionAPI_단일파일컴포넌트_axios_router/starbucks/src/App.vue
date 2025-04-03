<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div>
    <Header />
    <section>
      <article>
        내용
        <!-- <Products /> -->
        <router-view></router-view>
        <!-- <RouterView/> -->
      </article>
      <aside>광고</aside>
    </section>
  </div>
  <Footer />
</template>

<style scoped>
/* @import url('basic.css'); */
* {
  box-sizing: border-box;
}
section {
  border: 1px solid;
  height: 800px;
}
article {
  width: 75%;

  background-color: azure;
  margin: 10px;
  height: 90%;
  /* display: inline-block;*/ /*inline : 줄바꿈없음, 크기지정못함, 상하마진안됨 
                                    block : 줄바꿈있음, 크기지정함, 상하마진됨
                                    inline-block :줄바꿈없음 +  크기지정함, 상하마진됨
                                  */
  float: left;
  overflow: auto;
}
aside {
  width: 20%;
  background-color: #f4f4f1;
  height: 90%;
  /* display: inline-block; */
  float: right;
}
nav {
  width: 60%;
  height: 80%;
  overflow: auto;
  float: right;

  /* display: inline-block;
            width:60%; 
            margin-left: auto; margin-right: auto; */
}
/*nav>ul{*/
ul.menu {
  padding-left: 0px;
  list-style-type: none;
}
ul.menu > li {
  /* z-index: 100; */
  display: inline-block;
  padding-right: 10px;
}
ul.menu > li > a {
  text-decoration: none;
  color: #333;
}
ul.menu > li > a:hover {
  background-color: #333;
  color: #669900;
}
div.logo {
  background-image: url(../images/logo.png);
  background-repeat: no-repeat;
  height: 80%;
  overflow: hidden;
  width: 30%;
  float: left;
  max-width: 75px;
}
</style>
