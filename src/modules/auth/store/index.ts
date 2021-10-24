import { AuthState } from "@/modules/auth/store/types";
import { actions } from "@/modules/auth/store/actions";
import { getters } from "@/modules/auth/store/getters";
import { state } from "@/modules/auth/store/state";
import { mutations } from "@/modules/auth/store/mutations";
import { Module } from "vuex";
import { RootState } from "@/store";

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  actions,
  getters,
  state,
  mutations,
};
