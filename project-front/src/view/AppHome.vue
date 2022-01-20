<template>
  <div>
    홈화면 입니다.
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Content from '../components/AppContent.vue' 
import Footer from '../components/AppFooter.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    'app-content':Content,
    'app-footer':Footer
  }
}
</script>

<style>

</style>