<template>
  <section>
      <div class="search-inputBox">
        <input type="text" v-model="searchText">
        <span class="addContainer">
          <i class="searchBtn fa-solid fa-magnifying-glass" aria-hidden="true" @click="searchCafe"></i>
        </span>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      searchText: ''
    }
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
  .search-inputBox {
    background:white;
    width: 30rem;
    margin: 0 auto;
    box-shadow: 5px 5px 20px black;
    border-radius: 5px;
  }
  .search-inputBox input {
    width:26rem;
    border-style: none;
    font-size: 1.5rem;
  }
  input:focus {
    outline: none;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #15976c, #115a31);
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .searchBtn {
    margin-left: 10px;
    color: white;
    vertical-align: middle;
    cursor: pointer;
  }
</style>