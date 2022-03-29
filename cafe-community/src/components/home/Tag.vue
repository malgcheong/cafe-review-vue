<template>
  <section class="tag">
    <div v-for="(tag, key) in tagList" :key=key>
      {{tag.name}}
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return{
      tagList: [
        {
          name:'부산 중구 맛집'
        },
        {
          name:'저렴한 카페'
        },
        {
          name:'분위기 좋은 카페'
        }
      ]
    }
  }




}
</script>

<style scoped>

</style>