import { MutationTree } from "vuex";
import { MutationTypes, AuthState } from "@/modules/auth/store/types";

export type Mutations<S = AuthState> = {
  [MutationTypes.SET_USER](state: S, payload: any): void;
};

export const mutations: MutationTree<AuthState> & Mutations = {
  [MutationTypes.SET_USER](state, payload: number) {
    state.user = payload;
  },
};
