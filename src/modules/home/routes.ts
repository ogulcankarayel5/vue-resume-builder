import { RouteConfig } from "vue-router";

export const HomeRoutes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/modules/home/pages/Home.vue"),
  }
];
