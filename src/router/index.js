import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("../views/Skills.vue"),
  },
  {
    path: "/exp",
    name: "Experience",
    component: () => import("../views/Experience.vue"),
  },
  {
    path: "/examples",
    name: "Examples",
    component: () => import("../views/Examples.vue"),
    children: [
      {
        path: "example01",
        name: "Пример 1",
        component: () => import("../views/Examples/Example01"),
      },
      {
        path: "example02",
        name: "Пример 2",
        component: () => import("../views/Examples/Example02"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
