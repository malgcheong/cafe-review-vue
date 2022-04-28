<template>
  <div>
    <v-dialog v-model="alertDialog" max-width="280" persistent>
      <v-card>
        <v-card-title class="text-h6">
          <v-icon large left color="blue">mdi-alert-circle</v-icon>
          알림
        </v-card-title>
        <v-card-text>
          <div class="message">{{ alertMessage }}</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAlertDialog">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    alertMessage: String,
  },
  data() {
    return {
      alertDialog: false,
    };
  },
  watch: {
    alertMessage(val) {
      if (val) this.alertDialog = true;
      else this.alertDialog = false;
    },
  },
  methods: {
    closeAlertDialog() {
      this.$emit("closeAlertDialog");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.message {
  margin-top: 10px;
  text-align: center;
}
</style>
