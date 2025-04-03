<script></script>
<template>
  <header>
    <!-- HEAD -->
    <div class="logo"></div>
    <nav>
      <ul class="menu">
        <!-- <li class="products"><router-link to="/products">음료</router-link></li> -->
        <li class="products"><router-link to="/Products">음료</router-link></li>

        <li class="cart"><router-link to="/cart">장바구니</router-link></li>
        <li class="orders"><router-link to="/order">주문목록</router-link></li>
        <li><router-link to="/login">로그인</router-link></li>
        <li><a href="#">로그아웃</a></li>
        <li><router-link to="/signup">가입</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
* {
  box-sizing: border - box;
}
header {
  border: 1px solid;
  height: 100px;
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
