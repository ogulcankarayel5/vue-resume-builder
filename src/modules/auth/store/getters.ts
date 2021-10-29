import { GetterTree } from "vuex";
import { AuthState } from "@/modules/auth/store/types";
import { RootState } from "@/store";

export type Getters = {
  isLoggedIn(state: AuthState): boolean;
};

export const getters: GetterTree<AuthState, RootState> & Getters = {
  isLoggedIn: (state) => {
    return !!state.user;
  },
};
