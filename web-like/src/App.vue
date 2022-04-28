<template>
  <div id="app">
    <like-header></like-header>
    <like-list v-bind:likeList="likeList"></like-list>
    <like-footer></like-footer>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import LikeList from './components/LikeList.vue'
import LikeFooter from './components/LikeFooter.vue'
import CafeLists from './assets/likeList.json'

export default {
  data(){
    return {
      likeList:CafeLists
    }
  },
  components:{
    'like-header':LikeHeader,
    'like-list':LikeList,
    'like-footer':LikeFooter
  },
}
</script>

<style>
body{
  font-family: 'Do Hyeon', sans-serif;
}
</style>
