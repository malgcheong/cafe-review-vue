import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedPost: {},
  },
  getters: {
    getPost(state) {
      return state.selectedPost;
    },
  },
  mutations: {
    selectPost(state, obj) {
      Object.assign(state.selectedPost, obj);
    },
  },
  actions: {},
});

export default store;
