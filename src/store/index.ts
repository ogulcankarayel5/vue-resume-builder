import { createLogger, createStore } from "vuex";
import { auth } from "@/modules/auth/store";
import { UIState } from "@/modules/ui/store/types";
import { ui } from "@/modules/ui/store";
import { AuthState } from "@/modules/auth/store/types";

export interface RootState {
  auth: AuthState;
  ui: UIState;
}

const modules = {
  auth,
  ui,
};

export default createStore<RootState>({
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  modules,
});
