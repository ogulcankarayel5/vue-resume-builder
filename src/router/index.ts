import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { AuthRoutes } from "@/modules/auth/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...AuthRoutes,
  { path: "*", redirect: { name: "login" } },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
