import Vue from "vue";
import { Plugin } from "vue-fragment";

import App from "@/App.vue";
import "@/registerServiceWorker";

import router from "@/router";
import store from "@/store";
import "@/tailwind.css";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.use(Plugin);

Vue.config.productionTip = false;

Vue.component("VIcon", require("@/common/components/VIcon").default);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
