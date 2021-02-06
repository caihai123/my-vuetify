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
        path: "/button",
        name: "Button",
        component: () => import(/* webpackChunkName: "button" */ "@/pages/Button.vue"),
        meta: {
          title: "按钮",
        },
      },
      {
        path: "/input",
        name: "Input",
        component: () => import(/* webpackChunkName: "input" */ "@/pages/Input.vue"),
        meta: {
          title: "输入框",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
