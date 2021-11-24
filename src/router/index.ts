import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const history = createWebHashHistory();
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/layout",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/components/HelloWorld.vue"),
      },
      {
        path: "/friendnews",
        name: "FriendNews",
        component: () => import("@/views/friendnews/friendNews.vue"),
      },
      {
        path: "/personalinfo",
        name: "PersonalInfo",
        component: () => import("@/views/personalinfo/personalinfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
