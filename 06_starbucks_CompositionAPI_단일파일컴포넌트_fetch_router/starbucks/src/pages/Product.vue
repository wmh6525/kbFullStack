<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const p = ref({});
const route = useRoute(); // router에서 현재 경로 정보 접근

onMounted(async () => {
  const prodNo = route.params.prodNo;
  console.log(prodNo);

  const url = `http://localhost:3000/product/${prodNo}`;
  const res = await fetch(url);
  p.value = await res.json();
});
</script>

<template>
  <div class="product">
    {{ p }}
    <img
      :src="`./images/${p.prodNo}.jpg`"
      :alt="`${p.prodName} 상품의 이미지 입니다.`"
    />
    <hr />
    <!-- 속성값을 그떄 그떄마다 바꾸고 싶다면 bind 해야함 -->
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
* {
  box-sizing: border-box;
}
/* div.table .td { */
.td {
  width: 32%;
  border: 1px solid;
  display: inline-block;
}

.td > ul {
  list-style-type: none;
  margin-left: 0px;
}

.td > ul img {
  width: 80%;
  max-width: 300px;
}

.td > ul > li.prod_name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
