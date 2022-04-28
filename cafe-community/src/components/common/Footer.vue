<template>
  <footer>
    <div class="wrapper">
      <div class="footer_top">
        <div
          v-for="(menuItem, index) in getMenuState"
          :key="index"
          class="menu_list"
        >
          <div class="list_title">
            {{ menuItem.menuName }}
          </div>
          <div
            v-for="(subItem, index) in menuItem.menuList"
            :key="index"
            class="menu_sublist"
          >
            <router-link v-bind:to="subItem.to" class="list_link">{{
              subItem.name
            }}</router-link>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="footer_bottom_left">
          <div class="footer_info_top">
            <span
              ><router-link to="/"
                ><img
                  src="../../assets/images/PICA.svg"
                  style="width: 40px; background-color: white" /></router-link
            ></span>
            <span
              ><router-link to="/policy/privacy"
                >개인정보취급방침</router-link
              ></span
            >
            <span
              ><router-link to="/policy/terms-of-service"
                >이용약관</router-link
              ></span
            >
          </div>
          <div class="footer_info_bottom">
            <div>PICA 사업자 정보</div>
            <div>
              <span>PICA | </span>
              <span>대표자: 류청진 | </span>
              <span>개인정보보호책임자: 서청정 | </span>
              <span>이메일: skacjddn7@gmail.com</span>
              <br />
            </div>
            ©PICA. ALL RIGHTS RESERVED
          </div>
        </div>
        <div class="footer_bottom_right"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    getMenuState() {
      const arr = [];
      arr.push(this.$store.getters.getMenuState["홈"]);
      arr.push(this.$store.getters.getMenuState["고객센터"]);
      arr.push(this.$store.getters.getMenuState["기타"]);
      return arr;
    },
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

.footer_top {
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
  border-bottom: 1px solid #444;
}
.menu_list {
  margin-right: 20px;
}
.list_title {
  font-weight: 700;
  font-size: 14px;
  padding: 16px 0;
  line-height: 1.43;
  color: black;
}
.menu_sublist {
  display: flex;
  flex-direction: column;
  /* 반응형 
    overflow: hidden;
    transition: max-height .2s ease-in-out; */
}
.list_link {
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 7px;
  text-decoration: none;
  color: black;
}

.footer_bottom {
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
}
.footer_bottom_left {
  display: flex;
  flex-direction: column;
}
.footer_info_top {
  display: flex;
  height: 40px;
  margin-bottom: 8px;
  align-items: flex-end;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 700;
}
.footer_info_top a {
  color: inherit;
}
.footer_info_top span::before {
  content: "|";
}
.footer_info_top span:first-child::before {
  content: "";
}
.footer_info_top span {
  margin-right: 5px;
}
.footer_info_bottom {
  font-size: 12px;
  line-height: 1.5;
}
</style>
