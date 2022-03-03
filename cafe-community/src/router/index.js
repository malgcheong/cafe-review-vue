import Vue from 'vue'
import Home from '../views/home/Home'
import Join from '../views/join/Join'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/Join",
            component: Join
        },
    ]
});

export default router