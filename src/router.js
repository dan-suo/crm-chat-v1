import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./views/main-page.vue"),
    },
    {
        path: "/one-more-page",
        name: "OneMorePage",
        component: () => import("./views/one-more-page.vue"),
    },
    {
        path: "/about-page",
        name: "About",
        component: () => import("./views/about-page.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;