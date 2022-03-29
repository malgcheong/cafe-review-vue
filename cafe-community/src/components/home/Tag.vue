<template>
  <section class="tag">
    <div v-for="(tag, key) in tagList" :key=key :style="tag" class="tag_item">
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
          name:'요즘 핫플 카페'
        },
        {
          name:'저렴한 카페'
        },
        {
          name:'분위기 좋은 카페'
        },
        {
          name:'공부하기 좋은 카페'
        },
        {
          name:'기장 카페'
        }
      ]
    }
  },

  created(){
    this.tagList.forEach(element => {
      let rdColor = `hsl(${parseInt(Math.random() * 24, 10) * 15}, 16%, 57%)`;
      element['border-color'] = rdColor;
      element['background-color'] = rdColor;
    });

  }




}
</script>

<style scoped>
  .tag{
    display: flex;
    align-items: flex-end;
    margin: 20px;
  }
  .tag_item{
    margin: 0px 5px; 
    border: 1rem solid;
    color: whitesmoke;
    border-radius: 30px;
    box-shadow: 5px 5px 25px black;
    font-weight: initial;
    font-size: initial;
  }
</style>