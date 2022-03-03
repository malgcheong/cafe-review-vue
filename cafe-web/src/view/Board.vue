<template>
  <div>
    <div class="board-top">
      <div class="filter">
        <select v-model="orderType">
          <option value="date">작성일순</option>
          <option value="like">좋아요</option>
          <option value="comment">댓글수</option>
        </select>
      </div>
      <div class="form-type">
        <div class="form-area">
          <img
            @click="viewType = 'list'"
            class="form-type list-type"
            src="../image/list.png"
            alt="list type"
          />
          <img
            @click="viewType = 'gallery'"
            class="form-type gallery-type"
            src="../image/image.png"
            alt="gallery type"
          />
        </div>
      </div>
    </div>
    <table v-if="viewType === 'list'">
      <thead>
        <th v-for="(head, idx) in tableHeader" :key="idx">{{ head }}</th>
      </thead>
      <tbody>
        <tr v-for="(board, idx) in boardList" :key="idx">
          <td @click="showDetail(board.boardID)">
            <router-link to="/detail">{{ board.boardName }}</router-link>
          </td>
          <td>{{ board.cafeName }}</td>
          <td>{{ board.cafeAddress }}</td>
          <td>{{ board.like }}</td>
          <td>{{ board.comment }}</td>
          <td>{{ board.createTime }}</td>
        </tr>
      </tbody>
    </table>
    <div class="gallery-container" v-if="viewType === 'gallery'">
      <div
        class="gallery-item"
        v-for="(board, index) in boardList"
        :key="index"
      >
        <img class="gallery-img" :src="board.imagePath" />
        <div class="gallery-info">
          <div class="info-item boardName" @click="showDetail(board.boardID)">
            <router-link to="/detail">{{ board.boardName }}</router-link>
          </div>
          <div class="info-item createTime">{{ board.createTime }}</div>
          <div class="info-item cafeName">{{ board.cafeName }}</div>
          <div class="info-item cafeAddress">{{ board.cafeAddress }}</div>
          <div class="info-item">
            <img
              class="form-type like"
              src="../image/thumb-up.png"
              alt="like icon"
            />{{ board.like }}
            <img
              class="form-type comment"
              src="../image/comment.png"
              alt="like icon"
            />{{ board.comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  components: {},
  data() {
    return {
      tableHeader: ["제목", "카페이름", "위치", "좋아요", "댓글", "작성일"],
      boardList: [],
      orderType: "date",
      viewType: "list",
    };
  },
  created() {
    this.$http.get("/api/board").then((res) => {
      this.boardList = res.data.board;
      for (let idx = 0; idx < this.boardList.length; idx++) {
        this.boardList[
          idx
        ].imagePath = require(`../image/${this.boardList[idx].imagePath}`);
      }
      this.orderList();
    });
  },
  watch: {
    orderType() {
      this.orderList();
    },
  },
  methods: {
    showDetail(boardID) {
      console.log(boardID);
      let selectedPost = this.boardList.filter((element) => {
        if (element.boardID === boardID) return element;
      });
      this.$store.commit("selectPost", selectedPost);
    },
    orderList() {
      if (this.orderType === "date") {
        this.boardList.sort(function (a, b) {
          return dayjs(b.createTime).isAfter(dayjs(a.createTime)) ? 1 : -1;
        });
      } else if (this.orderType === "like") {
        this.boardList.sort(function (a, b) {
          return b.like - a.like;
        });
      } else if (this.orderType === "comment") {
        this.boardList.sort(function (a, b) {
          return b.comment - a.comment;
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
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
}
.gallery-item {
  display: flex;
  flex-basis: 50%;
}
.gallery-img {
  padding: 10px 10px;
  width: 250px;
  height: 250px;
}
.gallery-info {
  margin: 10px 10px;
  width: 300px;
}
img.like {
  margin-right: 5px;
}
img.comment {
  margin-left: 10px;
  margin-right: 5px;
}
.boardName {
  font-weight: bold;
}
.createTime {
  font-size: 13px;
}
.info-item.createTime {
  margin-bottom: 10px;
}
.info-item.cafeAddress {
  margin-bottom: 10px;
}
a {
  text-decoration: none;
}
</style>
