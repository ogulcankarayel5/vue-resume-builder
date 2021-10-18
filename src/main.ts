import Vue from "vue";
import { Plugin } from "vue-fragment";
import Vuelidate from 'vuelidate'


import App from "@/App.vue";
import "@/registerServiceWorker";

import router from "@/router";
import store from "@/store";
import "@/tailwind.css";

import i18n from "@/plugins/i18n"

Vue.use(Vuelidate)

Vue.use(Plugin);

Vue.config.productionTip = false;

Vue.component("VIcon", require("@/common/components/VIcon").default);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
