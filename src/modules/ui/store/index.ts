

import { actions } from "@/modules/ui/store/actions";
import { state } from "@/modules/ui/store/state";
import { mutations } from "@/modules/ui/store/mutations";
import { Module } from "vuex";
import { RootState } from "@/store";
import { UIState } from "./types";

export const ui: Module<UIState, RootState> = {
  namespaced: true,
  actions,
  state,
  mutations,
};
