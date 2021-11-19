import { createStore } from "vuex";
import createdPersistedStore from "vuex-persistedstate";

const store = createStore({
  state: {
    routerParams: {},
    token: "",
    nickname: "",
  },
  getters: {
    getRouterParams: (state) => state.routerParams,
    getNickname: (state) => state.nickname,
  },
  mutations: {
    setToken(state, payload) {
      state.token = "Bearer " + payload.token;
    },
    setNickname(state, payload) {
      state.nickname = payload.nickname;
    },
    changeView(state, payload) {
      // console.log("changeView");
      state.routerParams = payload.routerParams;
    },
  },
  plugins: [createdPersistedStore()],
});

export default store;
