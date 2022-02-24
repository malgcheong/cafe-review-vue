import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loginStatie: false,
  },
  getters: {
    user: (state) => {
      return state.loginState;
    },
  },
  mutations: {
    login(state) {
      state.loginState = true;
    },
  },
  actions: {},
});

export default store;
