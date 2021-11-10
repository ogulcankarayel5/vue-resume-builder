import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { AuthRoutes } from "@/modules/auth/routes";
import { HomeRoutes } from "@/modules/home/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...AuthRoutes,
  ...HomeRoutes,
  { path: "*", redirect: { name: "home" } },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
