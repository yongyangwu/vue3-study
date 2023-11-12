import { RouteRecordRaw } from "vue-router";
export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: () => import("../layouts/index.vue"),
    // redirect: "/",
    children: [
      {
        path: "/about",
        name: "about",
        component: () => import("../pages/about/index.vue"),
      },
      {
        path: "/center",
        name: "center",
        component: () => import("../pages/center/index.vue"),
      },
    ],
  },
];
