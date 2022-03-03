<template>
  <div>
    hello
    <h4>{{ getPost[0] }}</h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPost"]),
  },
};
</script>

<style></style>
