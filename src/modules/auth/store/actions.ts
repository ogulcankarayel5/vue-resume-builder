import { ActionContext, ActionTree } from "vuex";
import {
  ActionTypes,
  MutationTypes,
  AuthState,
} from "@/modules/auth/store/types";
import { Mutations } from "@/modules/auth/store/mutations";
import { RootState } from "@/store";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<AuthState, RootState>, "commit">;

export interface Actions {
  [ActionTypes.SET_USER](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<any>;
}

export const actions: ActionTree<AuthState, RootState> = {
  [ActionTypes.SET_USER]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { name: "deneme" };
        commit(MutationTypes.SET_USER, data);

        resolve(data);
      }, 500);
    });
  },
};
