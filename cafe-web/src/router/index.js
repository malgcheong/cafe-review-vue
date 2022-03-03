import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home";
import Board from "@/view/Board";
import BoardDetail from "@/view/BoardDetail";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/board",
      name: "Board",
      component: Board,
    },
    {
      path: "/detail",
      name: "BoardDetail",
      component: BoardDetail,
    },
  ],
});
