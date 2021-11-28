import Vue from "vue";
import VueRouter from "vue-router";
import { AuthRoutes } from "@/modules/auth/routes";
import { HomeRoutes } from "@/modules/home/routes";
import store from "@/store";
Vue.use(VueRouter);
const routes = [
    ...AuthRoutes,
    ...HomeRoutes,
    { path: "*", redirect: { name: "home" } },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    console.log(store.getters["auth/isLoggedIn"]);
    if (to.matched.some((record) => record.meta.restrict) &&
        store.getters["auth/isLoggedIn"]) {
        next("/");
    }
    else {
        next();
    }
});
export default router;
//# sourceMappingURL=index.js.map