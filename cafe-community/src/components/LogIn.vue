<template lang="">
    <div>
        <div class="container_login">
        <div class="wrap_login">
            <input class="id" type="text" placeholder="아이디를 입력하세요"/>
            <input class="pw" type="password" placeholder="pw를 입력하세요"/>
            <button class="button_login">로그인</button>
        </div>
        <div class="wrap_find">
            <button>비밀번호찾기</button>
            <button>아이디찾기</button>
            <button>회원가입</button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
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