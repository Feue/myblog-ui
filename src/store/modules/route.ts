const state = () => ({
  routerParams: {},
});

const getters = {};

const mutations = {
  changeView(state: { routerParams: any }, payload: { routerParams: any }) {
    state.routerParams = payload.routerParams;
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
