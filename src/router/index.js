import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "@/pages/Login.vue"),
  },
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "@/pages/Home.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "@/pages/About.vue"),
        meta: {
          title: "haha",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
