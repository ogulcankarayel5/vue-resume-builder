import Vue from "vue";
import { createLogger } from "vuex";
import Vuex from "vuex";
import { auth } from "@/modules/auth/store";
import { AuthState } from "@/modules/auth/store/types";

Vue.use(Vuex);

export interface RootState {
  auth: AuthState;
}

const modules = {
  auth,
};

export default new Vuex.Store<RootState>({
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  modules,
});
