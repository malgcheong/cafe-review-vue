<template>
  <section class="hero_search_tag">
    <Search/>
    <Tag/>
  </section>

</template>

<script>
import Search from "@/components/home/Search.vue"
import Tag from "@/components/home/Tag.vue"

export default {
  components:{
    Search, Tag
  }

}
</script>

<style scoped>
  .hero_search_tag{
    background-image: url("../../assets/images/8.jpg");
    background-size: cover;
    background-position: center;
    min-height: 600px;
    font-weight: bold;
    font-size: 2rem;
    color: white;
  }
</style>