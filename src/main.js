import Vue from "vue";
import { Plugin } from "vue-fragment";
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
Vue.use(Plugin);
Vue.config.productionTip = false;
Vue.component("VIcon", require("@/common/components/VIcon").default);
let app;
firebase.auth().onAuthStateChanged(async (user) => {
    if (!app) {
        if (user) {
            await store.dispatch(`auth/${ActionTypes.INIT}`, user);
        }
        app = new Vue({
            router,
            store,
            i18n,
            render: (h) => h(App),
        }).$mount("#app");
    }
});
//# sourceMappingURL=main.js.map