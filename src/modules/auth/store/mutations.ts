import { MutationTree } from "vuex";
import { MutationTypes, AuthState } from "@/modules/auth/store/types";

import firebase from "firebase";

export type Mutations<S = AuthState> = {
  [MutationTypes.SET_USER](state: S, payload: firebase.User): void;
  [MutationTypes.SET_USER_LOGOUT](state: S): void;
};

export const mutations: MutationTree<AuthState> & Mutations = {
  [MutationTypes.SET_USER](state, payload: firebase.User) {
    console.log(payload);
    state.user = payload;
  },
  [MutationTypes.SET_USER_LOGOUT](state) {
    state.user = null;
  },
};
