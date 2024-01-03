<template>
  <div class="header">头部</div>
  <div class="main">
    <div class="left">
      <router-link to="/about">about</router-link>
      <!-- <button @click="switchPage('/about')">about</button> -->
      <br />
      <router-link to="/center">center</router-link>
      <!-- <button @click="switchPage('/center')">center</button> -->
      <!-- <router-link to="/about">Go to About</router-link> -->
    </div>
    <div class="right">
      <router-view v-slot="{ Component, route }">
        <transition appear name="fade-transform" mode="out-in">
          <div>
            <keep-alive :include="keepAliveName">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { useRouter } from "vue-router";
import { reactive } from "vue";
const keepAliveName = reactive(["about", "center"]);

// const router = useRouter();

// const switchPage = (path: RouteLocationRaw) => {
//   router.push(path);
// };
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
