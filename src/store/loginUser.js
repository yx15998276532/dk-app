import * as loginSer from "../service/loginService";

export default {
  namespaced: true,
  state:{
    data: null,
    isLoading: false,
  },
  mutations: {
    setData (state, payload) {
      state.data = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async login({ commit },{loginId, loginPwd}) {
      commit("setIsLoading", true);
      const resp = await loginSer.login(loginId, loginPwd);
      commit('setData', resp.data);
      commit("setIsLoading", false);
      return resp.data;
    }
  },
  loginOut({commit}){
    commit('setData', '');
    loginSer.loginOut();
  },
  async whoAmI({commit}){
    commit("setIsLoading", true);
    try {
        const resp = await loginSer.whoAmi();
        commit("setData", resp.data);  
    } catch (error) {
        commit("setData", null); 
    }
    commit("setIsLoading", false);
  }
}