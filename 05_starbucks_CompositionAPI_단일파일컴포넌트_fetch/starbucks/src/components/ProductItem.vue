<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';

// props 정의
const props = defineProps({
  childProduct: {
    type: Object,
    required: true,
  },
});

// 반응형 변수 선언
const imageSrc = ref('');

// 이미지 로드 로직
onMounted(async () => {
  try {
    const image = await import(
      `@/assets/images/${props.childProduct.prodNo}.jpg`
    );
    imageSrc.value = image.default;
    console.log('Image loaded', imageSrc.value);
  } catch (error) {
    console.error('Error loading image:', error);
  }
});
</script>
<!-- <script>
export default {
  name: "ProductItem",
  props: ["childProduct"],
  mounted() {
    import(`@/assets/images/${this.childProduct.prodNo}.jpg`)
      .then((image) => {
        this.imageSrc = image.default;
        console.log("Image loaded", this.imageSrc);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  },
  data() {
    return {
      imageSrc: "",
    };
  },
};
</script> -->
<template>
  <div :class="`td ${childProduct.prodNo}`">
    <ul>
      <li>
        <img
          :src="imageSrc"
          :alt="`${childProduct.prodName}상품의 이미지입니다`"
        />
      </li>
      <li>{{ childProduct.prodName }}</li>
    </ul>
  </div>
</template>
<style scoped></style>
