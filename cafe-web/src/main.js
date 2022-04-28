import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import axios from "axios";
import store from "./store/index";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: (h) => h(App),
  router,
  vuetify,
  store,
}).$mount("#app");
