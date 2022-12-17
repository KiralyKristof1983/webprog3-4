import { createRouter, createWebHistory } from "vue-router";

import About from '../pages/About.vue'
import Home from "../pages/Home.vue";
import Jobs from "../pages/Jobs.vue";
import Contact from "../pages/Contact.vue";
import SingleJob from "../pages/SingleJob.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/jobs",
        name: "Jobs",
        component: Jobs,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/job/:slug",
        name: "SingleJob",
        component: SingleJob,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
