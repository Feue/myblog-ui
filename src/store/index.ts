import { createStore } from "vuex";
import createdPersistedStore from "vuex-persistedstate";
import actions from "./actions";
import auth from "./modules/auth";
import mutations from "./mutations";
import route from "./modules/route";

const store = createStore({
  state: {
    routerParams: {},
    token: "",
    userName: "",
  },
  mutations,
  getters: {},
  actions,
  modules: {
    auth,
    route
  },
  plugins: [createdPersistedStore()],
});

export default store;
