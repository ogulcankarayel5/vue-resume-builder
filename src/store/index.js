import Vue from "vue";
import { createLogger } from "vuex";
import Vuex from "vuex";
import { auth } from "@/modules/auth/store";
import { ui } from "@/modules/ui/store";
Vue.use(Vuex);
const modules = {
    auth,
    ui,
};
export default new Vuex.Store({
    plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
    modules,
});
//# sourceMappingURL=index.js.map