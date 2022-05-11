<template>

  <div>
    <div class="mypage-title">
      내가 쓴 게시판 보기
    </div>
    <div class="mypage">
      <aside class="sidebar">
        <div>내가 쓴 게시판 보기</div>
        <div>좋아요 한 게시판 보기</div>
        <div>내가 쓴 댓글 보기</div>
        <div>프로필</div>
        <div>알림 설정</div>
      </aside>
      <section class="contents">
      </section>


    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.mypage-title{
  font-size: 1.4rem;
  color: white;
  font-weight: 700;
  background: linear-gradient(#5C5E5C, #545454);
  line-height: 2;
  padding-left: 3rem;
}
.mypage{
  display: flex;
  height: 80vh;
}
.sidebar{
  display: flex;
  height: 50%;
  margin: 3rem;
  flex-direction: column;
  justify-content: space-between;
}
.contents{
  display: flex;

}
</style>