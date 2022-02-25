<template>
  <div>
    <div class="board-top">
      <div class="filter">
        <select v-model="orderType">
          <option value="name">카페이름순</option>
          <option value="review">리뷰순</option>
          <option value="star">평점순</option>
        </select>
      </div>
      <div class="form-type">
        <div class="form-area">
          <img
            class="form-type list-type"
            src="../image/list.png"
            alt="list type"
          />
          <img
            class="form-type gallery-type"
            src="../image/image.png"
            alt="gallery type"
          />
        </div>
      </div>
    </div>
    <table>
      <thead>
        <th v-for="(head, idx) in tableHeader" :key="idx">{{ head }}</th>
      </thead>
      <tbody>
        <tr v-for="(cafe, idx) in cafeList" :key="idx">
          <td>{{ cafe.cafeName }}</td>
          <td>{{ cafe.cafeAddress }}</td>
          <td>0</td>
          <td>{{ cafe.cafeStarAvg }}</td>
        </tr>
      </tbody>
    </table>
    <div v-for="(path, index) in attach" :key="index">
      <img :src="path.imagePath" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableHeader: ["카페이름", "위치", "리뷰", "평점"],
      cafeList: [],
      attach: [],
      orderType: "name",
      listType: "list",
    };
  },
  created() {
    this.$http.get("/api/cafe").then((res) => {
      this.cafeList = res.data;
      this.orderList();
    });
    this.$http.get("/api/cafe/attach").then((res) => {
      this.attach = res.data;
    });
  },
  watch: {
    orderType() {
      this.orderList();
    },
  },
  methods: {
    orderList() {
      if (this.orderType === "name") {
        this.cafeList.sort(function (a, b) {
          return a.cafeName < b.cafeName
            ? -1
            : a.cafeName == b.cafeName
            ? 0
            : 1;
        });
      } else if (this.orderType === "review") {
        this.cafeList.sort(function (a, b) {
          return b.review - a.review;
        });
      } else if (this.orderType === "star") {
        this.cafeList.sort(function (a, b) {
          return b.cafeStarAvg - a.cafeStarAvg;
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.board-top {
  width: 80%;
  margin: 5% auto 1% auto;
  display: flex;
}
.filter {
  flex: 50%;
}
.form-type {
  flex: 50%;
  position: relative;
}
.form-area {
  width: 58px;
  position: absolute;
  right: 0;
}
.list-type {
  margin-right: 10px;
}
img.form-type {
  filter: invert(40%) sepia(9%) saturate(4%) hue-rotate(36deg) brightness(87%)
    contrast(85%);
}
table {
  margin: 0 auto;
  width: 80%;
  border: 1px solid #000000;
  /* 테두리사이 간격 없애기 */
  border-collapse: collapse;
}
th,
td {
  border-bottom: 1px solid #000000;
  padding: 10px;
}
td {
  text-align: center;
}
</style>
