import { createRouter, createWebHistory } from "vue-router";
import { staticRouter } from "./staticRouter.ts";

const router = createRouter({
  history: createWebHistory(),
  routes: [...staticRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
