import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "run",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "test",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/maintenance",
      name: "maintenance",
      component: () => import("../views/MaintenanceView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
    },
    {
      path: "/options",
      name: "options",
      component: () => import("../views/OptionsView.vue"),
    },
  ],
});

export default router;
