<script>
export default {
  name: 'Singup',
  data() {
    return {
      customer: {
        id: 'id77',
        pwd: 'pwd77',
        name: 'test77',
      },
    };
  },
  methods: {
    submitForm() {
      const url = 'http://localhost:3000/signup';
      const requestData = this.customer; //요청 전달 데이터 JS객체
      const requestJson = JSON.stringify(requestData); // JS객체 -> JSON문자열로
      //                                    변환 반대의 경우는 parse 함수를 사용하면 된다.
      console.log(requestJson);
      const requestInit = {
        method: 'POST',
        body: requestJson,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      fetch(url, requestInit)
        .then((res) => {
          return res.text();
        })
        .then((responseData) => {
          alert(responseData);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>
<template>
  <form @submit.prevent="submitForm">
    ID : <input type="text" v-model="customer.id" /><br />
    PWD: <input type="password" v-model="customer.pwd" /><br />
    PWD1 : <input type="password" /><br />
    NAME : <input type="text" v-model="customer.name" /><br />
    <button>가입</button>
  </form>
</template>
<style></style>
