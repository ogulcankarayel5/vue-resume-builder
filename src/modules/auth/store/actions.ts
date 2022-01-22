import firebase from "firebase";
import { MutationTypes } from "./types";
import { ActionTree } from "vuex";
import { ActionTypes, AuthState } from "@/modules/auth/store/types";
import { ActionTypes as NotificationActionTypes } from "@/modules/ui/store/types";
import { AuthService } from "@/modules/auth/services";
import { RootState } from "@/store";
import router from "@/router";

export interface Actions {
  [ActionTypes.INIT](payload: firebase.User): Promise<void>;
  [ActionTypes.REGISTER](payload: {
    email: string;
    password: string;
  }): Promise<void>;
  [ActionTypes.LOGIN](payload: {
    email: string;
    password: string;
  }): Promise<void>;
  [ActionTypes.LOGIN_WITH_GOOGLE]: Promise<void>;
  [ActionTypes.LOGOUT](): Promise<void>;
}

export const actions: ActionTree<AuthState, RootState> = {
  async [ActionTypes.REGISTER](_, payload) {
    const { email, password } = payload;
    try {
      await AuthService.registerWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  },
  async [ActionTypes.INIT]({ commit }, payload) {
    commit(MutationTypes.AUTH_SUCCESS, payload);

    //this line will be move to route guards
    //router.replace("home");
  },
  async [ActionTypes.LOGIN_WITH_GOOGLE]({ commit }) {
    commit(MutationTypes.AUTH_START);
    try {
      await AuthService.loginWithGoogle();
    } catch (err) {
      commit(MutationTypes.AUTH_LOGOUT);
      console.log(err);
    }
  },
  async [ActionTypes.LOGIN]({ commit, dispatch }, payload) {
    const { email, password } = payload;

    commit(MutationTypes.AUTH_START);
    try {
      await AuthService.loginWithEmailAndPassword(email, password);
      dispatch(
        `ui/${NotificationActionTypes.PUSH_NOTIFICATION}`,
        { type: "success", message: "Giriş Başarılı, yönlendiriliyorsunuz" },
        { root: true }
      );
      router.replace("home");
    } catch (err: any) {
      dispatch(
        `ui/${NotificationActionTypes.PUSH_NOTIFICATION}`,
        { type: "error", message: err.message },
        { root: true }
      );
      commit(MutationTypes.AUTH_LOGOUT);
      console.log(err);
    }
  },
  async [ActionTypes.LOGOUT]({ commit }) {
    try {
      await AuthService.logout();
      commit(MutationTypes.AUTH_LOGOUT);
      router.replace("home");
    } catch (err) {
      console.log(err);
    }
  },
};
