<template>
  <div class="about">about</div>
  <div v-for="item in arr">{{ item }}</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const arr = ref([1, 2, 3]);
</script>

<style scoped></style>
