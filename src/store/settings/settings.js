
export default {
  state: {
    settings: {
      appTheme: "adminLte",
    }
  },
  mutations: {

    SET_THEME: (state, payload) => {
      state.settings.appTheme =  payload;
    }

  },
  actions: {
    async changeThemeColor({commit}, payload)
    {
      console.error(payload);

      commit('SET_THEME', payload);
    },

  },
  getters: {
    getAppTheme: (state) => state.settings.appTheme,
  }
}
