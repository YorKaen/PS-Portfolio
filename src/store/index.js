import { createStore } from "vuex";

export default createStore({
  state: {
    skipIntro: JSON.parse(localStorage.getItem("skipIntro")),
    modeDark: false,
    modeBubbles: false,
    visitsPageWelcome: JSON.parse(localStorage.getItem("visitsPageWelcome")),
    visitsPageAbout: JSON.parse(localStorage.getItem("visitsPageAbout")),
    visitsPageSkills: JSON.parse(localStorage.getItem("visitsPageSkills")),
    visitsPageExp: JSON.parse(localStorage.getItem("visitsPageExp")),
    visitsPageError: JSON.parse(localStorage.getItem("visitsPageError")),
  },
  mutations: {
    TEST() {
      console.log("TEST");
    },
    SKIP_INTRO(state) {
      state.skipIntro = true;
      localStorage.setItem("skipIntro", JSON.stringify(state.skipIntro));
    },
    SHOW_INTRO(state) {
      state.skipIntro = false;
      localStorage.setItem("skipIntro", JSON.stringify(state.skipIntro));
    },
    CHANGE_BUBBLES(state) {
      state.modeBubbles = !state.modeBubbles;
      //console.log(state.modeBrick);
    },
    CHANGE_DARK(state) {
      state.modeDark = !state.modeDark;
      //console.log(state.modeBrick);
    },
    INCREMENT_WELCOME(state) {
      state.visitsPageWelcome++;
      localStorage.setItem(
        "visitsPageWelcome",
        JSON.stringify(state.visitsPageWelcome)
      );
    },
    INCREMENT_ABOUT(state) {
      state.visitsPageAbout++;
      localStorage.setItem(
        "visitsPageAbout",
        JSON.stringify(state.visitsPageAbout)
      );
    },
    INCREMENT_SKILLS(state) {
      state.visitsPageSkills++;
      localStorage.setItem(
        "visitsPageSkills",
        JSON.stringify(state.visitsPageSkills)
      );
    },
    INCREMENT_EXP(state) {
      state.visitsPageExp++;
      localStorage.setItem(
        "visitsPageExp",
        JSON.stringify(state.visitsPageExp)
      );
    },
  },
  actions: {},
  modules: {},
});
