<template>
    <form>
        <div>
            <label for="name">이름</label>:
            <input type="text" name="name" id="name">
        </div>
        <div>
            <label for="email">이메일</label>:
            <input type="text" id="email" :class= "{item_readonly:readonly}" @keydown="readonly=false">
            <button type="button" v-on:click="getPasscode">인증 요청</button>
        </div>
        <div :class= "display">
            <label for="passcode">인증번호</label>:
            <input type="text" id="passcode" placeholder="인증번호 입력">
            <button type="button" v-on:click="verifyPasscode">확인</button>
        </div>
        <div>
            <label for="password">비밀번호</label>:
            <input type="text" id="password">
        </div>
        <div>
            <label for="password_check">비밀번호 확인</label>:
            <input type="text" id="password_check">
        </div>
    </form>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function(){
            return{
                display: "item_display_none",
                readonly: false,
                users:{}
            }
        },
        methods:{
            getPasscode:function(){
                // 인증번호 요청
                axios.post('join/aut')
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error);
                });

                //인증번호 display
                this.display = "item_display";

                //이메일 readonly
                this.readonly = true;
            },
            verifyPasscode:function(){
                // 인증번호 확인
                axios.post('join/aut/verify')
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error);
                });

                //인증번호 display
                this.display = "item_display_none";

            },
        },
    }
</script>

<style scoped>
    .item_display{
        display: block;
    }
    .item_display_none{
        display: none;
    }
    .item_readonly{
        background-color: rgb(196, 186, 186);
    }
</style>
