import { RouteConfig } from "vue-router";

export const AuthRoutes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/modules/auth/pages/Login.vue"),

  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/modules/auth/pages/Register.vue"),
    meta: {
      restrict: true,
    },
  },
];
