import { RouteConfig } from "vue-router";

export const AuthRoutes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/modules/auth/pages/Login.vue"),
  },
];
