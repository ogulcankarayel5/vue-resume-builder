import { actions } from "@/modules/ui/store/notification/actions";
import { state } from "@/modules/ui/store/notification/state";
import { mutations } from "@/modules/ui/store/notification/mutations";
import { Module } from "vuex";
import { RootState } from "@/store";
import { NotificationState } from "./types";

export const notification: Module<NotificationState, RootState> = {
  namespaced: true,
  actions,
  state,
  mutations,
};
