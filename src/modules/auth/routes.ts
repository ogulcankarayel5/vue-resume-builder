import { RouteRecordRaw } from "vue-router";

export const AuthRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/modules/auth/pages/LoginPage.vue"),
    meta: {
      restrict: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/modules/auth/pages/RegisterPage.vue"),
    meta: {
      restrict: true,
    },
  },
];
