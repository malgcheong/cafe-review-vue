import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home";
import Board from "@/view/Board";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/board",
      component: Board,
    },
  ],
});
