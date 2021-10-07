export const globalModule = {
  state: () => ({
    skipIntro: JSON.parse(localStorage.getItem("skipIntro")),
    bannerNotEmpty: false,
    pageExampleOffset: 545
  }),
  getters: {},
  mutations: {
    SKIP_INTRO(state) {
      state.skipIntro = true;
      localStorage.setItem("skipIntro", JSON.stringify(state.skipIntro));
    },
  },
  actions: {},
};
