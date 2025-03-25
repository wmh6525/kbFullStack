<script>
export default {
  name: 'CheckboxItem',
  props: ['name', 'checked'],
  data() {
    return {
      checked: false,
    };
  },
};
</script>
<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>
<style></style>
