import { createStore } from "vuex";

export default createStore({
  state: {
    skipIntro: JSON.parse(localStorage.getItem("skipIntro")),
    colorScheme: "colorless-scheme",
    modeBrick: false,
    modeDark: false,
    modeColor: false,
    modeBubbles: false,
  },
  mutations: {
    SKIP_INTRO(state) {
      state.skipIntro = true;
      localStorage.setItem("skipIntro", JSON.stringify(state.skipIntro));
    },
    CHANGE_BRICK(state) {
      state.modeBrick = !state.modeBrick;
      //console.log(state.modeBrick);
    },
    CHANGE_BUBBLES(state) {
      state.modeBubbles = !state.modeBubbles;
      //console.log(state.modeBrick);
    },
    CHANGE_DARK(state) {
      state.modeDark = !state.modeDark;
      //console.log(state.modeBrick);
    },
    SET_COLORLESS(state) {
      state.colorScheme = "colorless-scheme";
    },
    SET_COLORFUL(state) {
      state.colorScheme = "colorful-scheme";
      console.log(state.modeColor + " цвета");
    },
  },
  actions: {},
  modules: {},
});
