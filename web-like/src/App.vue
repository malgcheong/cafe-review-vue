<template>
  <div id="app">
    <like-header></like-header>
    <like-list></like-list>
    <like-footer></like-footer>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import LikeList from './components/LikeList.vue'
import LikeFooter from './components/LikeFooter.vue'

export default {
  data(){
    return {

    }
  },
  components:{
    'like-header':LikeHeader,
    'like-list':LikeList,
    'like-footer':LikeFooter
  }
}
</script>

<style>

</style>
