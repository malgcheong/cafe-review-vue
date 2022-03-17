<template lang="">
    <div>
        <div class="container_login">
        <h4>로그인</h4>
        <div class="wrap_login">
            <input class="id" type="text" placeholder="아이디를 입력하세요" v-model="id"/>
            <input class="pw" type="password" placeholder="pw를 입력하세요" v-model="pw"/>
            <router-link to="/home">
                <button class="button_login" @click="logIn">로그인</button>
            </router-link>
        </div>
        <div class="wrap_find">
            <router-link to="/find-pw">
                <button>비밀번호찾기</button>
            </router-link>
            <router-link to="/find-id">
                <button>아이디찾기</button>
            </router-link>
            <router-link to="/join">
                <button>회원가입</button>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            id:'',
            pw:'',
        }
    },
    methods:{
        logIn(){
            this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(res=>{
                if(res){
                    console.log(this.id,this.pw)
                    this.$router.push('home')
                }
            })
            .catch((error)=>{
                console.log(error)
                this.id='';
                this.pw='';
                alert('ID와 PW를 확인해주세요')
            })
        }
    }
}
</script>
<style >
.container_login{
    width:400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .wrap_login{
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .id{
        text-align: center;
        width: 90%;
        
    }
    .pw{
        text-align: center;
        width: 90%;
        
    }
    .button_login{
        width:90%;
        margin:10px;
    }
    .wrap_find button{
        margin:5px;
    }
</style>