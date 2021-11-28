import { MutationTypes } from "@/modules/auth/store/types";
export const mutations = {
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
//# sourceMappingURL=mutations.js.map