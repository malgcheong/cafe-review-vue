<template>
    <div>
        <form action="" method="post" >
            <div>
                <label for="name">이름</label>:
                <input type="text" name="name" id="name">
            </div>
            <div>
                <label for="email">이메일</label>:
                <input type="text" name="email" id="email">
                <input type="button" value="인증번호 전송" v-on:click="getCertification">
            </div>
            <div>
                <label for="certification">인증번호</label>:
                <input type="text" name="certification" id="certification" placeholder="인증번호 입력">
                <input type="button" value="확인">
            </div>
            <div>
                <label for="password">비밀번호</label>:
                <input type="text" name="password" id="password">
            </div>
            <div>
                <label for="password_check">비밀번호 확인</label>:
                <input type="text" name="password_check" id="password_check">
            </div>
        </form>

    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Login',
        data: function(){
            return{
                users:{}
            }
        },
        methods:{
            getCertification:function(){
                // var vm = this;
                // axios.get('https://jsonplaceholder.typicode.com/users/')
                // .then(function(response) {
                //     console.log(response.data);
                //     vm.users = response.data;
                // })
                // .catch(function(error) {
                // console.log(error);
                // });
            }
            
        }
    }
</script>


<style>

</style>