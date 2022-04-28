<template lang="">
    <div>
        <div class="container_login">
            <h4>아이디찾기 결과</h4>
        <div class="wrap_login">
            <div>회원님의 정보와 일치하는 아이디 목록입니다.</div>
            <input class="id" type="text" readonly v-model="id">
           
        </div>
        <div class="wrap_find">
            <router-link to="/login">
                <button>로그인</button>
            </router-link>
            <router-link to="/find-pw">
                <button>비밀번호 찾기</button>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data:function(){
    return{
      id:'sallyryu'
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