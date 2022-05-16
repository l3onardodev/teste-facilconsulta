import { createRouter, createWebHistory } from "vue-router";

import FirstPage from "../views/FirstPage";
import SecondPage from "../views/SecondPage";
import ThirdPage from "../views/ThirdPage";
import FourthPage from "../views/FourthPage";

const routes = [
    {
        path: "/",
        name: "FirstPage",
        component: FirstPage,
    },
    {
        path: "/appointment-details",
        name: "SecondPage",
        component: SecondPage,
    },
    {
        path: "/confirm-data",
        name: "ThirdPage",
        component: ThirdPage,
    },
    {
        path: "/thank-you",
        name: "FourthPage",
        component: FourthPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
