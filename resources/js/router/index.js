import { createRouter, createWebHistory } from "vue-router";

import Index from "../pages/Index.vue";
import About from "../pages/About.vue";
import Jobs from "../pages/Jobs.vue";
import Contact from "../pages/Contact.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Dashboard from "../pages/Dashboard.vue";
import SingleJob from "../pages/SingleJob.vue";
import SingleJob2 from "../pages/SingleJob2.vue";
import SingleJob3 from "../pages/SingleJob3.vue";
import SingleJob4 from "../pages/SingleJob4.vue";

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
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta:{requiresGuest: true},
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta:{requiresGuest: true},
        
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta:{requiresAuth: true},
    },
    {
        path: "/job/hp",
        name: "SingleJob3",
        component: SingleJob3,
        props: true,
    },
    {
        path: "/job/sandisk",
        name: "SingleJob4",
        component: SingleJob4,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


/**
router.beforeEach((to, from) => {
    const authenticated = localStorage.getItem("authenticated");

    if (to.meta.requiresGuest && authenticated) {
        return{
            name: "Dashboard",
        };
    }else if (to.meta.requiresAuth && !authenticated) {
        return { name: "Login",
    };

    }
});
*/


export default router;
