<template>
  <div class= "container">
    <div class="item">
      <h1>PICA</h1>
      <p>
        pick your cafe!<br />
        끊임없이 쏟아지는 신상카페들! <br />
        내가 가고 싶은 카페를 찜하고 다양한 리뷰들을 공유해봐요
      </p>
    </div>
    <div class="item">
      <h1>Usefil Links</h1>
      <p v-for="link in usefulLinks" :key="link">
        {{ link }}
      </p>
    </div>
    <div class="item">
      <h1>Contact us</h1>
      <p v-for="item in contact" :key="item">
        {{ item.name }} {{ item.email }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usefulLinks: ["Home", "Login", "Your Account", "post"],
      contact: [
        {
          name: "서여진",
          email: "pdg03092@gmail.com",
        },
        {
          name: "류효정",
          email: "ryu8701@gmail.com",
        },
        {
          name: "남청우",
          email: "skacjddn7@gmail.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.item:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: center;
}
.item:nth-child(2) {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: center;
}
.item:nth-child(3) {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: center;
}
</style>