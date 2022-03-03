<template>
<div class = "wrapper">
  <div class="footer_top">
    <div v-for="(menuItem, index) in menuList" :key="index" class="menu_list ">
      <div class="list_title">
        {{menuItem.menu}}
      </div>
      <div v-for="(subItem, index) in menuItem.sublist" :key="index" class="menu_sublist"> 
        <a v-bind:href="subItem.href" class="list_link">{{subItem.menu}}</a>
      </div>
    </div>
  </div>

  <div class="footer_bottom">
    <div class="footer_bottom_left">
      <div class="footer_info_top">
        <span><img src='../../assets/images/&.png' style="width:30px; height:30px;"></span>
        <span><a href="/policy/privacy">개인정보취급방침</a></span>
        <span><a href="/policy/terms-of-service">이용약관</a></span>
      </div>
      <div class="footer_info_bottom">
        <div>
          PICA 사업자 정보
        </div>
        <div>
          <span>PICA | </span>
          <span>대표자: 류청진 | </span>
          <span>개인정보보호책임자: 서청정 | </span>
          <span>이메일: skacjddn7@gmail.com</span>
          <br>
        </div>
        ©PICA. ALL RIGHTS RESERVED
      </div>
    </div>
    <div class="footer_bottom_right">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          menu: "피카",
          sublist:[{menu:"공지사항", href:"/notice"}, {menu:"피카 소개", href:"/info"}]
        },
        {
          menu: "고객센터",
          sublist:[{menu:"자주묻는 질문", href:"/questions"}, {menu:"이용약관", href:"/terms"}, {menu:"개인정보취급방침", href:"/persinfo"}]
        },
        {
          menu: "피카",
          sublist:[{menu:"공지사항", href:"/notice"}, {menu:"피카 소개", href:"/info"}]
        },
      ],

    };
  },
};
  

</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1152px;
    margin: 0 auto;
  }

  .footer_top{
    display: flex;
    justify-content: space-between;
    padding: 32px 20px;
    border-bottom: 1px solid #444;
    
  }
  .menu_list{
    margin-right: 20px;
  }
  .list_title{
    font-weight: 700;
    font-size: 14px;
    padding: 16px 0;
    line-height: 1.43;
    color:black;
  }
  .menu_sublist{
    display: flex;
    flex-direction: column;
    /* 반응형 
    overflow: hidden;
    transition: max-height .2s ease-in-out; */
  }
  .list_link{
    color: #FAEBCD;
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 7px;
  }

  .footer_bottom{
    display: flex;
    justify-content: space-between;
    padding: 32px 20px;
  }
  .footer_bottom_left{
    display: flex;
    flex-direction: column;
  }
  .footer_info_top{
    margin-bottom: 8px;
  }
  .footer_info_top a{
    font-size: 12px;
    color: #FAEBCD;
    line-height: 1.5;
    font-weight: 700;
  }
  .footer_info_top a::before{
    content:"|";
  }
  .footer_info_top span{
    margin-right: 5px;
  }
  .footer_info_bottom{
    font-size: 12px;
    line-height: 1.5;
    color: #FAEBCD;
  }

</style>
