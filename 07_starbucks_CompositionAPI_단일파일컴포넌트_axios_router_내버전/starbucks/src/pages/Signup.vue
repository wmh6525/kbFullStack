<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const customer = reactive({
  id: 'id77',
  pwd: 'pwd77',
  name: 'TEST77',
});

const idExist = ref(true);

const iddupchk = async () => {
  const url = `http://localhost:3000/iddupchk/${customer.id}`;
  try {
    const res = await axios.get(url);
    idExist = false;
  } catch (err) {
    alert(err.message);
    idExist = true;
  }
};

const submitForm = async () => {
  const url = 'http://localhost:3000/signup';
  const requestData = customer;
  const requestJson = JSON.stringify(requestData);

  // const requestInit = {
  //   method: 'POST',
  //   body: requestJson,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };

  // try {
  //   const res = await fetch(url, requestInit);
  //   const responseData = await res.text();
  //   alert(responseData);
  // } catch (err) {
  //   alert(err.message);
  // }
  try {
    const reponse = await axios.post(url, requestData, {
      'Content-Type': 'application/json',
    });
  } catch (err) {
    alert(err.response.data);
  }
};
</script>
<template>
  <form @submit.prevent="submitForm">
    ID :
    <input
      type="text"
      v-model="customer.id"
      v-on:focus="
        idExist = true;
        $event.target.select();
      "
    />
    <button type="button" class="bt" v-on:click.stop="iddupchk">
      중복확인
    </button>
    <br />
    PWD : <input type="password" v-model="customer.pwd" />
    <br />
    PWD1 : <input type="password" /><br />
    NAME : <input type="text" v-model="customer.name" />
    <br />
    <button class="bt" v-show="idExist">가입</button>
  </form>
</template>
<style scoped>
.bt {
  background: #006633;
  color: #fff;
  border-radius: 3px;
  text-align: center;
  margin: 0 20px;
  max-width: 570px;
}
</style>
