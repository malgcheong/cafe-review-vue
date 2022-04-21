<template lang="">
    <div>
        <div class="container_join">
            <h4>회원가입</h4>
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
                <button v-if="info.id=='email'" @click="getCode">인증번호 전송</button>
                <button v-if="info.id=='chkMail'" @click="verify">확인</button>
            </div>        
            <br>
            <br>   
            <button :disabled="!join" @click="clickJoin">회원가입</button>
           
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
            infoItem:{
                "name": {
                    label:'이름',
                    id:'name',
                    data:''
                    },
                "email":{label:'이메일', id:'email', data:''},
                "chkMail":{label:'', id:'chkMail', data:''},
                "pw": {label:'비밀번호', id:'pw', data:''},
                "id": {label:'비밀번호확인', id:'chkPw', data:''}
            },
            onModal:false,
            code:'',
            inputCode:'',
            valid:false,
        }
    },
    methods:{
        clickJoin(){
            this.onModal=true;
        },
        //send mail
        getCode(){
            const sendName = this.infoItem.name.data;
            const sendMail= this.infoItem.email.data;

            this.$axios.get(`http://localhost:3001/join`,{
                params: {
                    sendName:sendName,
                    sendMail:sendMail
                }
                
            })
            .then(res=>{
                if(res){
                    // console.log(res)
                    this.code=res.data
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        //verify code
        verify(){
            if(this.infoItem.chkMail.data==this.code){
                this.valid=true;
                alert('인증번호가 맞습니다. 회원가입을 계속 진행해주세요.')
            }else{
                alert('인증번호가 맞지 않습니다.')
                this.valid=false;
            }
        }
    },
    components:{
        'complete-modal':modal
    },
    computed:{
        join(){
            return this.isAgree&&this.valid
        }
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