<template lang="">
    <div>
        <div class="container_login">
        <div class="wrap_login">
            <input class="id" type="text" placeholder="아이디를 입력하세요"/>
            <input class="email" type="text" placeholder="계정에 등록된 이메일을 입력하세요"/>
            
            <input class="button_input-code" type="text" placeholder="인증번호 입력" disabled/>
        </div>
        <div class="wrap_find">
            <button>확인</button>
            <button>취소</button>
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
    .email{
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