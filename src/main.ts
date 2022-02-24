import Vue, { createApp } from "vue";
import firebase from "@/plugins/firebase";
import Vuelidate from "vuelidate";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/tailwind.css";

import i18n from "@/plugins/i18n/i18n";
import { ActionTypes } from "./modules/auth/store/types";

Vue.use(Vuelidate);

Vue.component("VIcon", require("@/common/components/VIcon").default);

let app: any;

firebase.auth().onAuthStateChanged(async (user) => {
  if (!app) {
    if (user) {
      await store.dispatch(`auth/${ActionTypes.INIT}`, user);
    }
    app = createApp(App);
    app.use(router);
    app.use(store);
    app.use(i18n);
    app.mount("#app");
  }
});
