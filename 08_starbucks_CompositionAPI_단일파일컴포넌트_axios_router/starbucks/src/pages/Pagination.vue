<script>
export default {
  props: {
    // 전체 아이템 수
    totalItems: {
      type: Number,
      required: true,
    },
    // 한 페이지에 표시할 아이템 수
    itemsPerPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
    },
    startPage: 1,
    endPage: 1,
  },
  data() {
    return {
      // currentPage: 1,
    };
  },
  computed: {
    // 전체 페이지 수
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
};
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li>totalPages:{{ totalPages }}, pages : {{ pages }}</li>
      <!-- 이전 버튼 -->
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)"
          >Previous</a
        >
      </li>

      <!-- 페이지 번호 -->
      <li
        class="page-item"
        :class="{ active: page === currentPage }"
        v-for="page in end - start + 1"
        :key="page"
      >
        <a class="page-link" href="#" @click.prevent="goToPage(page)">{{
          page
        }}</a>
      </li>

      <!-- 다음 버튼 -->
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<style></style>
