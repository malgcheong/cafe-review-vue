import Vue from "vue";
import Home from "../views/home/Home";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});

export default router;
