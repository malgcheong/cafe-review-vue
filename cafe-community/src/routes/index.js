import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import findId from '../components/find-id.vue'
import findPW from '../components/find-pw.vue'
import join from '../components/join.vue'
import findIdRes from '../components/find-id-result.vue'
import findPWRes from '../components/find-pw-result.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/find-pw',
            component:findPW
        },
        {
            path:'/find-id',
            component:findId
        },
        {
            path:'/join',
            component:join
        },
        {
            path:'find-id-res',
            component:findIdRes
        },
        {
            path:'find-pw-res',
            component:findPWRes
        }
    ]
})