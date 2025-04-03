<script setup>
import { ref } from 'vue';
const notfoundimageSrc = ref('notfound');
</script>
<template>
  <img :src="`./images/${notfoundimageSrc}.jpg`" />
</template>
