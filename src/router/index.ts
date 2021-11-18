import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const history = createWebHashHistory();
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
