import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/roomUser",
    name: "roomUser",
    component: () => import("../views/User.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
