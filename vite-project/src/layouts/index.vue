<template>
  <div class="header">头部</div>
  <div class="main">
    <div class="left">
      <!-- <router-link to="/about">about</router-link> -->
      <div @click="switchPage('/about')">about</div>
      <br />
      <!-- <router-link to="/center">center</router-link> -->
      <div @click="switchPage('/center')">center</div>
      <!-- <router-link to="/about">Go to About</router-link> -->
    </div>
    <div class="right">
      <router-view v-slot="{ Component, route }">
        <transition appear name="fade-transform" mode="out-in">
          <keep-alive :include="keepAliveName">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const switchPage = (path) => {
  router.push(path);
};
</script>

<style scoped>
.header {
  height: 60px;
  background: pink;
}
.main {
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  background: lightgray;
}
.left {
  width: 120px;
  height: 100%;
  background: lightblue;
}
</style>
