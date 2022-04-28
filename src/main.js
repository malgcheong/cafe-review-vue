import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import { store } from "./store/store.js";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
