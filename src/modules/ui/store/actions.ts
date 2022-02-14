import { ActionContext, ActionTree } from "vuex";
import { ActionTypes, MutationTypes } from "@/modules/ui/store/types";
import { UIState, INotification } from "./types";
import { RootState } from "@/store";

// type AugmentedActionContext = {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>;
// } & Omit<ActionContext<NotificationState, RootState>, "commit">;

export interface Actions {
  [ActionTypes.PUSH_NOTIFICATION](
    { commit }: ActionContext<UIState, RootState>,
    payload: INotification
  ): void;
  [ActionTypes.REMOVE_NOTIFICATION](
    { commit }: ActionContext<UIState, RootState>,
    payload: INotification
  ): void;

  [ActionTypes.TOGGLE_NAV]({ commit }: ActionContext<UIState, RootState>, payload: boolean): void;
}

export const actions: ActionTree<UIState, RootState> & Actions = {
  async [ActionTypes.PUSH_NOTIFICATION]({ commit }, payload) {
    commit(MutationTypes.PUSH_NOTIFICATION, payload);
  },
  [ActionTypes.REMOVE_NOTIFICATION]({ commit }, payload) {
    commit(MutationTypes.REMOVE_NOTIFICATION, payload);
  },
  [ActionTypes.TOGGLE_NAV]({ commit }, payload) {
    commit(MutationTypes.TOGGLE_NAV, payload);
  },
};
