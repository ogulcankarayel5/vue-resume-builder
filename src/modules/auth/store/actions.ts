import { ActionTree } from "vuex";
import { ActionTypes, AuthState } from "@/modules/auth/store/types";
import { AuthService } from "@/modules/auth/services";
import { RootState } from "@/store";

export interface Actions {
  [ActionTypes.REGISTER](payload: {
    email: string;
    password: string;
  }): Promise<void>;
  [ActionTypes.LOGIN](payload: {
    email: string;
    password: string;
  }): Promise<void>;
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
  async [ActionTypes.LOGIN](_, payload) {
    const { email, password } = payload;
    try {
      await AuthService.loginWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  },
  async [ActionTypes.LOGOUT]() {
    try {
      await AuthService.logout();
    } catch (err) {
      console.log(err);
    }
  },
};
