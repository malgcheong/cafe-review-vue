<template>
  <div>
    홈화면 입니다.
    <button @click="login">로그인</button>
    <button @click="logout">로그아웃</button>

    <router-link to="/board">
      <button>목록</button>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.commit("login", true);
    },
    logout() {
      this.$store.commit("login", false);
    },
  },
};
</script>

<style></style>
