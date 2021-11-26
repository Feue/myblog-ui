import { createStore } from "vuex";
import createdPersistedStore from "vuex-persistedstate";

const store = createStore({
  state: {
    routerParams: {},
    token: "",
    nickname: "",
    userInfo: {}
  },
  getters: {
    getRouterParams: (state) => state.routerParams,
    getNickname: (state) => state.nickname,
    getUserInfo: (state) => state.userInfo
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
    setUserInfo(state, payload) {
      state.userInfo = payload.userInfo
      state.nickname = payload.userInfo.nickname
    }
  },
  plugins: [createdPersistedStore()],
});

export default store;
