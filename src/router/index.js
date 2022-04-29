import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginEmpty.vue"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterEmpty.vue"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/CategoriesMain.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/DetailMain.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/HistoryMain.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeMain.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/planning",
    name: "planning",
    component: () => import("../views/PlanningMain.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileMain.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/record",
    name: "record",
    component: () => import("../views/RecordMain.vue"),
    meta: {
      layout: "main",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
