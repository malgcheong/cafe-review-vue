<template>
    <div>
        <div>
            <label for="name">이름</label>:
            <input type="text" name="name" id="name" v-model="parm.name">
        </div>
        <div>
            <label for="email">이메일</label>:
            <input type="text" id="email" :class= "{item_readonly:style.readonly}" @keydown="style.readonly=false" v-model="parm.email" @blur="validateEmail">
            <button type="button" v-on:click="getPasscode">인증 요청</button>        
        </div>
        <!-- 이메일 형식 validation -->
        <span v-if="validation.isEmail"></span>
        <span v-else style="color:red;">이메일 형식이 아닙니다!</span>
        <div :class= "style.display">
            <label for="passcode">인증번호</label>:
            <input type="text" id="passcode" placeholder="인증번호 입력" v-model="validation.passcode" @blur="validatePasscode">
            <button type="button" v-on:click="verifyPasscode">확인</button>
        </div>
        <!-- 인증번호 형식 validation -->
        <span v-if="validation.isPasscode"></span>
        <span v-else style="color:red;">인증번호 형식이 틀립니다!</span>
        <div>
            <label for="password">비밀번호</label>:
            <input type="text" id="password" v-model="parm.password">
        </div>
        <div>
            <label for="password_check">비밀번호 확인</label>:
            <input type="text" id="password_check" v-model="validation.password" @blur="validatePassword">
        </div>
        <!-- 비밀번호 비교 validation -->
        <span v-if="validation.isPassword"></span>
        <span v-else style="color:red;">비밀번호가 다릅니다!</span>

        <button type="button" v-on:click="sendForm"></button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function(){
            return{
                //css data
                style:{
                    display: "item_display_none",
                    readonly: false,
                },
                //form data
                parm:{
                    name:"",
                    email:"",
                    password:"",
                },
                //validation data
                validation:{
                    isEmail:1,
                    passcode:"",
                    isPasscode:1,
                    password:"",
                    isPassword:1,
                },
                //server
                server:{
                    send:1,
                }
            }
        },
        methods:{
            getPasscode:function(){
                if(this.validation.isEmail == 0) return;
                // 인증번호 요청
                axios.post('join/aut')
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error);
                });

                //인증번호 display
                this.style.display = "item_display";

                //이메일 readonly
                this.style.readonly = true;
            },
            verifyPasscode:function(){
                if(this.validation.isPasscode == 0) return;
                // 인증번호 확인
                axios.post('join/aut/verify')
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error);
                });

                //인증번호 display
                this.style.display = "item_display_none";
            },
            validateEmail:function(){
                this.validation.isEmail = this.parm.email.includes("@");
            },
            validatePasscode:function(){
                this.validation.isPasscode = this.validation.passcode.length < 6 ? false : true;
            },
            validatePassword:function(){
                this.validation.isPassword = this.parm.password != this.validation.password ? false : true
            },
            sendForm:function(){
                if(this.server.send == 0) return;
                // form 전송
                axios.post('join/form')
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        },
        computed:{

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
