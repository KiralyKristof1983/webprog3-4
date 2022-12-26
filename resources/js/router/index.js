import { createRouter, createWebHistory } from "vue-router";

import Index from "../pages/Index.vue";
import About from "../pages/About.vue";
import Jobs from "../pages/Jobs.vue";
import Contact from "../pages/Contact.vue";
import SingleJob from "../pages/SingleJob.vue";
import SingleJob2 from "../pages/SingleJob2.vue";


const routes = [
    {
        path: "/index",
        name: "Index",
        component: Index,
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
        path: "/job/ibm",
        name: "SingleJob",
        component: SingleJob,
        props: true,
    },
    {
        path: "/job/3m",
        name: "SingleJob2",
        component: SingleJob2,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
