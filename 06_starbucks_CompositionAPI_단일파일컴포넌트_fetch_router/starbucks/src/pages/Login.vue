<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';

const router = useRouter(); //라우터객체.push()
const customer = reactive({
  id: 'id99',
  pwd: 'pwd99',
});
const saveId = ref(true);
onMounted(() => {
  customer.id = localStorage.getItem('savedId') || customer.id;
});

const clickLoginButton = () => {
  alert('button클릭됨');
};
const submitForm = async (event) => {
  alert('form서브밋됨');
  saveId
    ? localStorage.setItem('savedId', customer.id)
    : localStorage.removeItem('savedId');

  // console.log(this.id, this.pwd, this.saveId)
  console.log(customer, saveId);
  // event.preventDefault(); //폼의 submit이벤트의 디폴트핸들러 막기. 수식어 @submit.prevent로도 가능

  const url = 'http://localhost:3000/login';
  const params = new URLSearchParams();
  params.append('id', customer.id);
  params.append('pwd', customer.pwd);
  console.log(params.toString());
  // XMLHttpRequest객체활용
  const requestInit = {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const res = await fetch(url, requestInit); //1.요청하기 2-1.성공된 응답받기

    const responseData = await res.text(); //3.응답내용을 문자열로 얻기
    if (res.status == '200') {
      //성공
      router.push('/');
    } else {
      //실패
      //4.응답내용 문자열
      alert(responseData); //로그인실패
    }
  } catch (err) {
    //2-2.실패된 응답받기 :  네트워크 오류, 잘못된 URL
    alert(err.message);
  }
};
</script>
<template>
  <form @submit.prevent="submitForm">
    <!-- <form method="post" action="http://localhost:3000/login"> -->
    <!-- <input type="text" v-model="id" placeholder="아이디 입력하세요"><br> -->
    <!-- <input type="password" v-model="pwd" placeholder="비밀번호 입력하세요"><br> -->

    <input
      type="text"
      v-model="customer.id"
      name="id"
      placeholder="아이디 입력하세요"
    /><br />
    <input
      type="password"
      v-model="customer.pwd"
      name="pwd"
      placeholder="비밀번호 입력하세요"
    /><br />

    <!-- <input type="checkbox" v-model="saveId">아이디저장<br> -->
    <div class="renew_input_box">
      <input id="saveIdchk" type="checkbox" v-model="saveId" class="mem2" />
      <label for="saveIdchk">아이디저장</label><br />
    </div>
    <button @click="clickLoginButton">로그인</button>
    <!-- button type="submit"과 같음 -->
    <!--버튼이 클릭되면 
            1. 버튼의 click이벤트 발생  -> 사용자정의 이벤트핸들러(clickLoginButton) 처리
            2. 폼의 submit이벤트 발생   -> 사용자정의 이벤트핸들러(submitForm) 처리
            3. 폼의 submit이벤트의 디폴트핸들러가 처리됨 
               (디폴트핸들러가 하는 일 : 
                폼의 action속성값에 해당하는 URL로 입력값(name=value)들 전송, 
                action속성값이 없으면 현재사용중인 URL로 입력값들 전송 )
            -->
  </form>
</template>
<style scoped>
.renew_input_box {
  position: absolute;
  display: block;
  width: 100%;
  right: 3px;
  top: 0;
}

input {
  vertical-align: middle;
}

.renew_input_box {
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 20px 20px;
  position: relative;
}

input.mem2[type='checkbox'] {
  position: absolute;
  width: 26px;
  height: 26px;
  top: 0px;
  left: 0px;
  padding: 0;
  border: 0 none;
  background: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

input.mem2[type='checkbox']:checked + label {
  background: #fff url('./images/mem_check_on.png') no-repeat 0 0;
  background-size: 26px;
}

input.mem2[type='checkbox'] + label {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 26px;
  line-height: 26px;
  background: #fff url('./images/mem_check_off.png') 0 0 no-repeat;
  font-size: 13px;
  color: #3f4141;
  cursor: pointer;
  vertical-align: top;
  background-size: 26px;
  text-indent: 30px;
  cursor: pointer;
  overflow: hidden;
  z-index: 4;
  appearance: none;
  outline: none;
}
</style>
