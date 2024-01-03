<template>
  <div class="about">about</div>
  <input type="text" />
  <div v-for="item in arr">{{ item }}</div>
</template>
<script setup lang="ts">
defineOptions({
  name: "about",
});
import { ref } from "vue";
const arr = ref([1, 2, 3]);
</script>

<style scoped></style>
