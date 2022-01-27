import Vue from 'vue'
import Home from '../views/Home'
import Join from '../views/Join'
import Join2 from '../views/Join2'
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
        {
            path: "/Join2",
            component: Join2
        }
    ]
});

export default router