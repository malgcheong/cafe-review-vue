<template lang="">
    <div>
            <join></join>
            <br>
            <logIn></logIn>
            <br>
            <findId></findId>
            <br>
            <findIdRes></findIdRes>
            <br>
            <findPW></findPW>
            <br>
            <findPWRes></findPWRes>
            <br>
            <router-view></router-view>
    </div>
</template>
<script>
import logIn from './components/login.vue'
import findId from './components/find-id.vue'
import findPW from './components/find-pw.vue'
import join from './components/join.vue'
import findPWRes from './components/find-pw-result.vue'
import findIdRes from './components/find-id-result.vue'


export default{
    name: 'app',
    components:{
        join,
        logIn,
        findId,
        findIdRes,
        findPW,
        findPWRes
    }
}
</script>
<style lang="">
    
</style>