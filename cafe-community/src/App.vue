<template lang="">
    <div>
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
        <join></join>
        <br>
        
    </div>
</template>
<script>
import logIn from './components/logIn.vue'
import findId from './components/find-id.vue'
import findPW from './components/find-pw.vue'
import join from './components/join.vue'
import findIdRes from './components/find-id-result.vue'
import findPWRes from './components/find-pw-result.vue'


export default{
    name: 'app',
    components:{
        logIn,
        findId,
        findPW,
        join,
        findIdRes,
        findPWRes
    }
}
</script>
<style lang="">
    
</style>