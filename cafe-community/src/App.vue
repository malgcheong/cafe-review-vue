<template lang="">
  <div>
    <div class="container__contract">
      <p>이용약관</p>
      <hr>
      <div class="agree all"  >
        <p @click="agreeAll">회원가입 약관에 모두 동의합니다</p>
        <div class="wrap__check-box">
            <input type="checkbox" v-model="checkedAll" @click="agreeAll">
        </div>
      </div>
      <div >
        <div v-for="(item,key) in contractItem" :key="key" :class="item.idx" class="contentItem">
          <div>
            <div class="wrap__contract">
              <p>아래 약관에 동의합니다</p>
              <div class="wrap__check-box">
                <input type="checkbox" :class="item.idx" class="check-box" v-model="checkBox[key]">
              </div>
            </div>
            <div class="content__body">
              {{item.content}}
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import contractItem from "./assets/contract.js"
export default {
  data:function(){
    return{
      contractItem: contractItem,
      checkBox:[],
      checkedAll: false
    }
  },
  methods:{
    agreeAll:function(){
      if(!this.checkedAll){
        this.checkedAll=true;
        for (let i = 0; i < this.checkBox.length; i++) {
          this.checkBox[i]=true;
        }
      }else{
        this.checkedAll=false;
        for (let i = 0; i < this.checkBox.length; i++) {
          this.checkBox[i]=false;
        }
      }
    },
    
  },
  created(){
    for (let i = 0; i < this.contractItem.length; i++) {
      this.checkBox.push(false)
    }
  }
}
</script>

<style>

  .contentItem {
    margin-bottom: 20px;
    word-break:break-all;
    word-wrap:break-word;
  }
  .wrap__contract{
    display: flex;
  }
  .content__body{
      overflow: scroll;
      height: 20vh;
  }
  .all{
    display: flex;
    justify-content: flex-end;
    
  }
  .agree{
    margin:5px;
  }
  .wrap__check-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .checkbox{
    border-radius: 3px;
  }

</style>