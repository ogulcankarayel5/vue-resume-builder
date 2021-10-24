import { GetterTree } from "vuex";
import { AuthState } from "@/modules/auth/store/types";
import { RootState } from "@/store";

export type Getters = {
  user(state: AuthState): number;
};

export const getters: GetterTree<AuthState, RootState> & Getters = {
  user: (state) => {
    return state.user;
  },
};
