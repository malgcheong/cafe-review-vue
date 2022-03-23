<template>
  <nav class="navbar">

    <!--화면 가로가 일정이상 작아질시 -->
    <div class="container mobile_container">
      <div class="content">
        <div class="left">left</div>
        <div class="brand_header">brand</div>
        <div class="right">right</div>
      </div>
    </div>

    <!--화면 가로가 일정이상 커질시 -->
    <div class="container desktop_container">
      <div class="content">
        
        <!-- 로고 -->
        <div class="brand_header">
          <router-link to="/Join">
            <img src='../../assets/images/&.png' style="width:60px; height:60px;">
          </router-link>
        </div>

        <!-- 메뉴 -->
        <div class="navbar-menu">
          <div v-for="(item,index) in getMenuItems" :key="index" class="navbar-item">
            <router-link v-bind:to="item.to">
              {{item.name}}
            </router-link>
          </div>
        </div>

        <!-- 마이페이지 -->
        <div class="navbar-mypage">
          <div v-show="isLogin" class="navbar-mypage">
            <div class="navbar-item">마이페이지</div>
            <div v-on:click="logout" class="navbar-item">로그아웃</div>
          </div>
          <div v-show="!isLogin">
            <div v-on:click="login" class="navbar-item"> 로그인</div>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.commit('setLoginState', {'userID':''})
    },
    login(){
      //폼 입력 없이 바로 로그인 (임시)
      this.$store.dispatch('getUserInfo');
    }
  },
  computed:{
    getMenuItems(){
      return this.$store.getters.getMenuState["홈"].menuList;
    },
    isLogin(){
      return this.$store.getters.getLoginState.login;
    }
  },
}
</script>



<style scoped>
  .mobile_container{
    display: none;
  }
  .desktop_container{
    display: block;
  }
  .navbar{
    background-color: white;
  }
  .content{
    display: flex;
    justify-content: space-between;
  }
  .navbar-menu{
    display: flex;
    align-items: center;
  }
  .navbar-mypage{
    display: flex;
    align-items: center;
  }
  .navbar-item{
    width: 150px;
  }

</style>
