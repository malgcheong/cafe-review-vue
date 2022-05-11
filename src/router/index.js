import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Board from "@/views/Board";
import BoardDetail from "@/views/BoardDetail";
import BoardWrite from "@/views/BoardWrite";
import Mypage from "@/views/MyPage";
import Test from "@/views/Test2";

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
    {
      path: "/write",
      name: "BoardWrite",
      component: BoardWrite,
    },
    {
      path: "/mypage",
      name: "MyPage",
      component: Mypage
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    }
  ],
});
