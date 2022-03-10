import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home
        }
    ]
})