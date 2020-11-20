import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    postsData: [],
    postDetails: [],
  },
  getters: {
    getTableData(state) {
      return state.postsData;
    },
    getPostDetail(state) {
      return state.postDetails;
    },
  },
  mutations: {
    INITIALIZE_TABLE(state, payload) {
      state.postsData = payload.data.data.children;
    },
    SHOW_POST_DETAIL(state, payload) {
      state.postDetails.push(payload);
    },
    DELETE_POST(state, payload) {
      state.postsData = state.postsData.filter(
        (currentItem) => currentItem.data.id !== payload);
    },
  },
  actions: {
    async requestTableData(context) {
      const tableData = await axios.get(
        "https://www.reddit.com/r/technology/new.json"
      );
      context.commit("INITIALIZE_TABLE", tableData);
    },
  },
});
