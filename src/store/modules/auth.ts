const state = () => ({
  token: "",
  userName: "",
});

const getters = {
  userName: (state: { userName: string }) => state.userName,
};

const mutations = {
  setToken(state: { token: string }, payload: { token: string }) {
    state.token = "Bearer " + payload.token;
  },
  setUserName(state: { userName: string }, payload: { userName: string }) {
    state.userName = payload.userName;
  },
};

const actions = {};

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
};
