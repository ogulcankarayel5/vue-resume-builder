import { ActionContext, ActionTree } from "vuex";
import {
  ActionTypes,
  MutationTypes,
} from "@/modules/ui/store/notification/types";
import { NotificationState, INotification } from "./types";
import { RootState } from "@/store";

// type AugmentedActionContext = {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>;
// } & Omit<ActionContext<NotificationState, RootState>, "commit">;

export interface Actions {
  [ActionTypes.PUSH_NOTIFICATION](
    { commit }: ActionContext<NotificationState, RootState>,
    payload: INotification
  ): void;
  [ActionTypes.REMOVE_NOTIFICATION](
    { commit }: ActionContext<NotificationState, RootState>,
    payload: INotification
  ): void;
}

export const actions: ActionTree<NotificationState, RootState> & Actions = {
  async [ActionTypes.PUSH_NOTIFICATION]({ commit }, payload) {
    commit(MutationTypes.PUSH_NOTIFICATION, payload);
  },
  [ActionTypes.REMOVE_NOTIFICATION]({ commit }, payload) {
    commit(MutationTypes.REMOVE_NOTIFICATION, payload);
  },
};
