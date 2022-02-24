import { RouteRecordRaw } from "vue-router";

export const HomeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/modules/home/pages/HomePage.vue"),
  },
];
