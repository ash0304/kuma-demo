import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Lazy Loading
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/style",
    name: "style",
    component: () => import("../views/StyleView.vue"),
  },
  {
    path: "/color",
    name: "color",
    component: () => import("../views/ColorView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("../views/ProjectView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
