import { MutationTree } from "vuex";
import { MutationTypes, INotification } from "@/modules/ui/store/types";

import { UIState } from "./types";

export type Mutations<S = UIState> = {
  [MutationTypes.PUSH_NOTIFICATION](state: S, payload: any): void;
  [MutationTypes.TOGGLE_NAV](state: S, payload: boolean): void;
};

export const mutations: MutationTree<UIState> & Mutations = {
  [MutationTypes.PUSH_NOTIFICATION](state, payload: INotification) {
    state.notifications = [
      ...state.notifications,
      { ...payload, id: Math.random().toString(20) },
    ];
  },
  [MutationTypes.REMOVE_NOTIFICATION](state, payload: any) {
    console.log(payload);
    state.notifications = state.notifications.filter((notification) => {
      return notification.id !== payload;
    });
  },
  [MutationTypes.TOGGLE_NAV](state, payload) {
    state.isNavOpen = payload;
  },
};
