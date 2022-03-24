<template>
  <div>
    <div class="content-box">
      <div class="content-item content-title">제목<input type="text" /></div>
      <div class="content-item content-cafeName">
        카페이름<input type="text" />
      </div>
      <div class="content-item content-attach">
        첨부파일<input type="text" />
      </div>
      평점
      <div class="content-item content-star">
        <div v-for="(star, index) in starList" :key="index">
          {{ star.text }}
          <star-rating
            v-bind:show-rating="false"
            v-bind:active-on-click="true"
            v-bind:star-size="30"
            v-model="star.value"
          ></star-rating>
        </div>
      </div>
      <div class="content-item content-attach">내용<textarea></textarea></div>
      <div class="content-item content-create">
        <button>등록</button>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      starList: [
        { text: "음식", value: 0, id:'starFood'},
        { text: "서비스", value: 0 },
        { text: "가격", value: 0 },
        { text: "분위기", value: 0 },
      ],
    };
  },

  methods: {
    getStar(index) {
      this.score = index + 1;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.content-box {
  margin: 5% 25%;
}
.content-item {
  margin: 2%;
}
.content-star {
  margin: 2%;
  border: 1px solid gray;
}
input {
  width: 100%;
}
textarea {
  width: 100%;
  height: 200px;
}
</style>
