<template lang="">
    <div>
        <div class="container_login">
            <h4>비밀번호찾기 결과</h4>
        <div class="wrap_login">
            <input class="id" type="text" readonly v-model="id">
            <br>
            <input class="password" type="text" placeholder="새 비밀번호" v-model="pw"/>
            <input class="confirm-password" type="text" placeholder="비밀번호 확인" v-model="confirmPW"/>
           
        </div>
        <div class="wrap_find">
            <button :disabled="!pw||!confirmPW||pw!==confirmPW">
                <router-link to="/home" ></router-link>
            확인</button>
            <router-link to="/find-id">
                <button>취소</button>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data:function(){
    return{
      id:'sallyryu',
      pw:'',
      confirmPW:'',
    }
  },
  methods:{
      validPW(){

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
    .password, .confirm-password{
        text-align: center;
        width: 90%;
        
    }
    .button_send-code{
        width:90%;
        margin:10px;
    }
    .button_input-code{
        text-align: center;
    }
    .wrap_find button{
        margin:5px;
    }
</style>