<template>
  <li><input type="checkbox" v-model="checked" /> 옵션 1</li>
</template>
<script>
export default {
    name: 'CheckboxItem'
    data() {
        return {
            checked: false,
};
},
};
</script>
