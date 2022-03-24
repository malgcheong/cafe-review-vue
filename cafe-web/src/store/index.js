import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedPost: {},
    loginState: Boolean,
  },
  getters: {
    isLogin(state) {
      return state.loginState;
    },
    getPost(state) {
      return state.selectedPost;
    },
  },
  mutations: {
    login(state, value) {
      state.loginState = value;
    },

    selectPost(state, obj) {
      Object.assign(state.selectedPost, obj);
    },
  },
  actions: {},
});

export default store;
