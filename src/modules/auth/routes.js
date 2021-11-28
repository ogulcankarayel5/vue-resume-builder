export const AuthRoutes = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/modules/auth/pages/Login.vue"),
        meta: {
            restrict: true,
        },
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
//# sourceMappingURL=routes.js.map