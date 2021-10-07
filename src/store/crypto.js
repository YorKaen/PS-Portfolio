//import Example4Index from "@/components/aaThisProject/example4/Example4Index";
//import Example4Blocks from "@/components/aaThisProject/example4/Example4Blocks";
import { defineAsyncComponent, defineComponent } from "vue";

export const cryptoModule = {
  state: () => ({
    isAuth: JSON.parse(localStorage.getItem("isAuth")),
    currentComponent: defineAsyncComponent(() =>
        import("../components/aaThisProject/example4/Example4Index")
    ),
  }),
  getters: {},
  mutations: {
    AUTHORIZE_USER(state) {
      state.isAuth = true;
      localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
    },
    UNAUTHORIZE_USER(state) {
      state.isAuth = false;
      localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
    },
    MOVE_TO_BLOCK2(state){
      state.currentComponent = defineAsyncComponent(() =>
          import("../components/aaThisProject/example4/Example4Blocks")
      )
    },
  },
  actions: {},
};
