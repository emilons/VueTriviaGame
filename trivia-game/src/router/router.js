import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        //Routes "/" to the homepage
        path: "/",
        name: "default",
        component: () => import("../components/Home/HomePage.vue")
    },
    {
        //Routes /home to the homepage
        path: "/home",
        name: "Home",
        component: () => import("../components/Home/HomePage.vue")
    },
    {
        //routes /game to the gamepage
        path: "/game",
        name: "GamePage",
        component: () => import("../components/Game/GamePage.vue")
    },
    {
        //routes /results to the resultpage
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