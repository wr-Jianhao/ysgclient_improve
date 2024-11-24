import path from "path";
import { createRouter, createWebHistory } from "vue-router"; // 更改为 createWebHistory
// import store from "@/store";

const routes = [
  {
    path: "/",
    redirect: "/home", // 添加重定向路由
  },

  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("@/views/news/index.vue"),
  },
  {
    path: "/patent",
    name: "Patent",
    component: () => import("@/views/patent/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/article",
    name: "Article",
    component: () => import("@/views/article/index.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("@/views/detail/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
