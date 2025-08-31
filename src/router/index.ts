import { createRouter, createWebHashHistory } from "vue-router";
import { auth } from "../firebase/firebase";

import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView, meta: { requiresGuest: true } },
  { path: "/register", component: RegisterView, meta: { requiresGuest: true } },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory("/Task-Manager-Website/"),
  routes,
});

router.beforeEach((to, _, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) next("/login");
  else if (to.meta.requiresGuest && user) next("/dashboard");
  else next();
});

export default router;
