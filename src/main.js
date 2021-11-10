import { createApp } from "vue";
import App from "./App.vue";
//import "./registerServiceWorker.js.bckp";
import router from "./router";
import store from "./store";
import Mask from "./directives/Mask"

import "./assets/scss/style.scss";

const app = createApp(App);
app.directive('mask', Mask);

app.use(store).use(router).mount("#app");
