import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
  {
    path: "/Examples",
    name: "Examples",
    component: () => import("../views/Examples.vue"),
    children: [
      {
        path: "Example01",
        name: "Пример 1",
        meta: {
          title: "Динская фабрика мешкотары",
        },
        component: () => import("../views/Examples/Example01"),
      },
      {
        path: "Example02",
        name: "Пример 2",
        meta: {
          title: "Студия красоты Концы с Концами",
        },
        component: () => import("../views/Examples/Example02"),
      },
      {
        path: "Example03",
        name: "Пример 3",
        meta: {
          title: "Creditio",
        },
        component: () => import("../views/Examples/Example03"),
      },
      {
        path: "Example04",
        name: "Пример 4",
        meta: {
          title: "Crypto Wallet",
        },
        component: () => import("../views/Examples/Example04"),
      },
      {
        path: "Example05",
        name: "Пример 5",
        meta: {
          title: "Double or Nothing!",
        },
        component: () => import("../views/Examples/Example05"),
      },
      {
        path: "Example06",
        name: "NFT",
        meta: {
          title: "NFT",
        },
        component: () => import("../views/Examples/Example06"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  //history: createWebHashHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  // Проверяем есть кастомный title
  window.document.title =
    toRoute.meta && toRoute.meta.title
      ? toRoute.meta.title
      : "Purple Sphynx Portfolio";
  next();
});

export default router;
