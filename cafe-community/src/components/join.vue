<template lang="">
    <div>
        <div class="container_join">
        <div class="container_contract">
            <h2>이용약관</h2>
            <div class="wrap_contract" v-for="(item,idx) in contractItem" :item="item" :key="idx">
                {{item.content}}
            </div>
            <label for="agree">Yes, I agree</label>
            <input type="checkbox" id="agree" v-model="isAgree">
        </div>
        <br>
        <hr>
        <br>
        <div class="container_info">
            <div class="wrap_info" v-for="(info, idx) in infoItem" :info="info" :key="idx">
                <label :for="info.id">{{info.label}}</label>
                <input :id="info.id" v-model="info.data" >
                <button v-if="info.id=='email'">인증번호 전송</button>
                <button v-if="info.id=='chkMail'">확인</button>
            </div>        
            <br>
            <br>   
            <button :disabled="!isAgree" @click="clickJoin">회원가입</button>
           
        </div>
    </div>
     <complete-modal :onModal="onModal"></complete-modal>
    </div>
    
</template>
<script>
import contractItem from "../assets/contract"
import modal from "./complete-modal.vue"
export default {
    data(){
        return{
            contractItem:contractItem,
            isAgree:false,
            infoItem:[
                {label:'이름', id:'name', data:''},
                {label:'이메일', id:'email', data:''},
                {label:'', id:'chkMail', data:''},
                {label:'비밀번호', id:'pw', data:''},
                {label:'비밀번호확인', id:'chkPw', data:''}
            ],
            onModal:false,
        }
    },
    methods:{
        clickJoin(){
            this.onModal=true;
        }
    },
    components:{
        'complete-modal':modal
    }
}
</script>
<style >
    .wrap_contract{
        width:90vw;
        height: 100px;
        overflow: scroll;
    }
</style>