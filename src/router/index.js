import Vue from "vue";
import VueRouter from "vue-router";

//layout
import Layout from "../components/Layout/Layout.vue";

// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

//views
import Checkall from "../views/Checkall/Checkall.vue";
import Elecfee from "../views/Elecfee/Elecfee.vue";
import CheckDetail from "../views/CheckDetail/CheckDetail.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/checkall",
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/checkall",
        component: Layout,
        children: [
            {
                path: "",
                name: "checkall",
                component: Checkall,
            },
        ],
    },
    {
        path: "/checkdetail",
        component: Layout,
        children: [
            {
                path: "",
                name: "checkdetail",
                component: CheckDetail,
            },
        ],
    },
    {
        path: "/elecfee",
        component: Layout,
        children: [
            {
                path: "",
                name: "elecfee",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/Elecfee/Elecfee.vue"
                    ),
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
