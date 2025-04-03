<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router'; //현재사용중인 라우트객체
import axios from 'axios';
const p = reactive({});
onMounted(async () => {
  //const prodNo = location.search.substring(1).split('=')[1];
  //fetch함수로 back server요청,응답

  const currentRoute = useRoute();
  //ex)현재URL이 http://localhost:5173/product?prodNo=C0003인 경우
  // const query = currentRoute.query; //{prodNo:'C0003'}
  // const prodNo = query.prodNo;

  //ex)현재URL이 http://localhost:5173/product/C0003
  const params = currentRoute.params;
  const prodNo = params.prodNo; //C0003
  let url = `http://localhost:3000/product/${prodNo}`;
  console.log(url);
  Object.assign(
    p,
    /*await fetch(url).then((res) => {
      return res.json(); //res.json() : json문자열형태의 응답내용을 JS객체로 반환
    }*/
    await axios.get(url).then((res) => {
      return res.data;
    })
  );
});
</script>
<template>
  <div>
    <!--product.html문서로 채우세요~-->

    <!-- 상대경로 :src="`./images/${p.prodNo}.jpg`" -->
    <img
      :src="`/images/${p.prodNo}.jpg`"
      :alt="`${p.prodName}상품의 이미지입니다`"
    />
    <hr />
    <div class="detail">
      <ul>
        <li class="prodNo">{{ p.prodNo }}</li>
        <li class="prodName">{{ p.prodName }}</li>
        <li class="quantity">
          <input type="number" value="1" min="1" max="99" />
        </li>
        <li><button>장바구니 담기</button></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
img {
  max-width: 200px;
}
</style>
