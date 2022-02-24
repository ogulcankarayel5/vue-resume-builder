import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { AuthRoutes } from "@/modules/auth/routes";
import { HomeRoutes } from "@/modules/home/routes";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  ...AuthRoutes,
  ...HomeRoutes,
  { path: "/:catchAll(.*)", redirect: { name: "home" } },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(store.getters["auth/isLoggedIn"]);
  if (
    to.matched.some((record) => record.meta.restrict) &&
    store.getters["auth/isLoggedIn"]
  ) {
    next("/");
  } else {
    next();
  }
});
export default router;
