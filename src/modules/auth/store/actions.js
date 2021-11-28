import { MutationTypes } from "./types";
import { ActionTypes } from "@/modules/auth/store/types";
import { ActionTypes as NotificationActionTypes } from "@/modules/ui/store/notification/types";
import { AuthService } from "@/modules/auth/services";
import router from "@/router";
export const actions = {
    async [ActionTypes.REGISTER](_, payload) {
        const { email, password } = payload;
        try {
            await AuthService.registerWithEmailAndPassword(email, password);
        }
        catch (err) {
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
        }
        catch (err) {
            commit(MutationTypes.AUTH_LOGOUT);
            console.log(err);
        }
    },
    async [ActionTypes.LOGIN]({ commit, dispatch }, payload) {
        const { email, password } = payload;
        commit(MutationTypes.AUTH_START);
        try {
            await AuthService.loginWithEmailAndPassword(email, password);
            dispatch(`ui/notification/${NotificationActionTypes.PUSH_NOTIFICATION}`, { type: "success", message: "Giriş Başarılı, yönlendiriliyorsunuz" }, { root: true });
            router.replace("home");
        }
        catch (err) {
            dispatch(`ui/notification/${NotificationActionTypes.PUSH_NOTIFICATION}`, { type: "error", message: err.message }, { root: true });
            commit(MutationTypes.AUTH_LOGOUT);
            console.log(err);
        }
    },
    async [ActionTypes.LOGOUT]({ commit }) {
        try {
            await AuthService.logout();
            commit(MutationTypes.AUTH_LOGOUT);
            router.replace("home");
        }
        catch (err) {
            console.log(err);
        }
    },
};
//# sourceMappingURL=actions.js.map