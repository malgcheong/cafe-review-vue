<template>
  <section class="hero_search_tag">
    <Search/>
    <Tag/>
  </section>

</template>

<script>
import Search from "@/components/home/Search.vue"
import Tag from "@/components/home/Tag.vue"
import axios from 'axios';

export default {
  components:{
    Search, Tag
  },

  methods:{
    searchCafe(){
      axios.post('http://localhost:3000/pica/search', JSON.stringify(`{searchText: ${this.searchText}}`))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>