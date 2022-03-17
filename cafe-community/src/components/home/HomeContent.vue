<template>
  <section class="container">
      <!-- 상단배너 & 검색창 & 인기태그 -->
      <section class="hero"></section>
      <section class="search"></section>
      <section class="tag"></section>

      <!-- 타입별 카페 리스트 -->
      <PostList/>

  </section>
</template>

<script>
  import PostList from "@/components/home/PostList.vue"
export default {
  components:{
    PostList,
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }
</style>