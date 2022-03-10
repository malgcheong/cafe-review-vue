<template>
   
        <div class="container_modal" v-if="onModal">
            <div class="background">
                <div class="modal">
                    <div class="account_info">
                        <label for="id">- 아이디</label>
                        <input id="id" v-model="account_id" readonly>
                        <br>
                        <label for="mail">- 이메일 </label>
                        <input id="mail" v-model="account_mail" readonly>
                    </div>
                    <div>
                        축하합니다! 가입이 완료되었습니다!
                    </div>
                    <button @click="goHomeLogIn">확인</button>
                    <!-- <router-link to="/"> -->
                </div>
            </div>
        </div>
    
</template>
<script>
export default {
    props:{
        onModal:{
            type:Boolean,
            default(){return false;}
        }
    },
    data(){
        return{
            account_id:'hyovely',
            account_mail:'hyovely@naver.com'
        }
        
    },
    methods: {
        goHomeLogIn(){
            
        }
    },
}
</script>
<style >
    .container_modal{
        /* position: fixed; */
        width:100vw;
        height: 100vh;
    }
    .background{
        width:100%;
        height: 100%;
        background:rgba(0,0,0,0.5);
        /* position: fixed;
        padding: 20px; */
    }
    .modal{
        background: white;
        width:300px;
        height: 200px;
        border-radius: 10px;
    }
</style>