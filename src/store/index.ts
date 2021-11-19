import { createStore } from "vuex";
import createdPersistedStore from "vuex-persistedstate";

const store = createStore({
  state: {
    routerParams: {},
    token: "",
    userName: "",
  },
  getters: {
    getRouterParams: (state) => state.routerParams,
    getUserName: (state) => state.userName,
  },
  mutations: {
    setToken(state, payload) {
      state.token = "Bearer " + payload.token;
    },
    setUserName(state, payload) {
      state.userName = payload.userName;
    },
    changeView(state, payload) {
      console.log("changeView");
      state.routerParams = payload.routerParams;
    },
  },
  plugins: [createdPersistedStore()],
});

export default store;
