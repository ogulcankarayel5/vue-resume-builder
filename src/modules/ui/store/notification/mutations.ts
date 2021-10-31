import { MutationTree } from "vuex";
import {
  MutationTypes,
  INotification,
} from "@/modules/ui/store/notification/types";

import { NotificationState } from "./types";

export type Mutations<S = NotificationState> = {
  [MutationTypes.PUSH_NOTIFICATION](state: S, payload: any): void;
};

export const mutations: MutationTree<NotificationState> & Mutations = {
  [MutationTypes.PUSH_NOTIFICATION](state, payload: INotification) {
    state.notifications = [
      ...state.notifications,
      { ...payload, id: Math.random().toString(20) },
    ];
  },
  [MutationTypes.REMOVE_NOTIFICATION](state, payload: any) {
    console.log(payload)
    state.notifications = state.notifications.filter((notification) => {
      return notification.id !== payload;
    });
  },
};
