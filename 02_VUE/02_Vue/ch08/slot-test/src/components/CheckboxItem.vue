<script>
export default {
  name: 'CheckboxItem',
  props: ['checkboxData'],
  data() {
    return {};
  },
  mounted() {
    this.data = this.childCheckboxData + '입니다.';
  },
};
</script>

<template>
  <li>
    <!-- <input type="checkbox" />
        <span>{{data}}</span>
        <span>{{ childCheckboxData1 }}</span> -->
    <input type="checkbox" />
    <slot></slot>
    <hr />
    <slot name="icon"></slot>
    <!-- 부모에서 template 를 만든 후 상속받아서 사용한다. -->
  </li>
</template>

<style></style>
