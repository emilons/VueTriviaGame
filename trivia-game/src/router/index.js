import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home/HomePage.vue")
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../components/Home/HomePage.vue")
    },
    {
        path: "/questions",
        name: "QuestionPage",
        component: () => import("../components/Question/QuestionPage.vue")
    },
    {
        path: "/results",
        name: "Results",
        component: () => import("../components/Result/ResultPage.vue")
    }
]

const router = new VueRouter({

    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;