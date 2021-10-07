import { createStore } from "vuex";
import {globalModule} from "./globalModule";
import {defamModule} from "./defam";
import {cryptoModule} from "./crypto";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    global: globalModule,
    defam: defamModule,
    crypto: cryptoModule,
  },
});
