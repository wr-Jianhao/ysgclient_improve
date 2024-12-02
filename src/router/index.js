import { createRouter, createWebHistory } from "vue-router"; // 更改为 createWebHistory
import store from "@/store";
import path from "path";

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
    path: "/patent/publish",
    name: "PatentPublish",
    component: () => import("@/views/publish/index.vue"),
    beforeEnter: (to, from, next) => {
      console.log(store.state.isLoggedIn);
      if (store.state.isLoggedIn) {
        next(); // 允许进入路由
      } else {
        next({ path: "/login" }); // 重定向到登录页面
      }
    },
  },
  {
    path: "/demand",
    name: "Demand",
    component: () => import("@/views/demand/index.vue"),
  },
  {
    path: "/demand/detail",
    name: "DemandDetail",
    component: () => import("@/views/feature/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/news/article",
    name: "Article",
    component: () => import("@/views/article/index.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("@/views/detail/index.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/user/index.vue"),
    beforeEnter: (to, from, next) => {
      console.log(store.state.isLoggedIn);
      if (store.state.isLoggedIn) {
        next(); // 允许进入路由
      } else {
        next({ path: "/login" }); // 重定向到登录页面
      }
    },
  },
  {
    path: "/user/center",
    name: "UserCenter",
    component: () => import("@/views/center/index.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.isChoose) {
        next(); // 允许进入路由
      } else {
        next({ path: "/user" });
      }
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
