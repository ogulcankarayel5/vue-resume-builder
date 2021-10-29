import { RootState } from "@/store";
import { Module } from "vuex";
import { notification } from "./notification";
import { NotificationState } from "./notification/types";

export interface UIState {
  notification: NotificationState;
}

const modules = {
  notification,
};
export const ui: Module<UIState, RootState> = {
  namespaced: true,
  modules,
};
