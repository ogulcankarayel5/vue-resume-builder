import { MutationTree } from "vuex";
import { MutationTypes, AuthState } from "@/modules/auth/store/types";

import firebase from "firebase";

export type Mutations<S = AuthState> = {
  [MutationTypes.AUTH_START]: (state: S) => void;
  [MutationTypes.AUTH_SUCCESS]: (state: S, payload: any) => void;

  [MutationTypes.AUTH_LOGOUT]: (state: S) => void;

};

export const mutations: MutationTree<AuthState> & Mutations = {
  [MutationTypes.AUTH_START](state) {
    state.loading = true;
  },
  [MutationTypes.AUTH_SUCCESS](state, payload) {
    state.loading = false;
    state.user = payload;
  },
  [MutationTypes.AUTH_LOGOUT](state) {
    state.user = null;
    state.loading = false;
  },
};
