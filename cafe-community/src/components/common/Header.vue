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
        <div class="brand_header">
          <router-link to="/Join">
            <img src='../../assets/images/&.png' style="width:60px; height:60px;">
          </router-link>
        </div>
        <div class="navbar-menu">

          <!-- v-for -->
          <div class="navbar-item">
            <router-link to="/Join">
              Posts
          </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/Join">          
              Comments
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/Join">
              Likes
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/Join">
              Profile
            </router-link>
          </div>
          <div class="navbar-item">
            마이페이지
          </div>
          <div class="navbar-item">
            로그아웃
          </div>


        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  
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
  .navbar-item{
    width: 150px;
  }

</style>
