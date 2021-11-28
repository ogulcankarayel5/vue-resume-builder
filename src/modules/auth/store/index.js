import { actions } from "@/modules/auth/store/actions";
import { getters } from "@/modules/auth/store/getters";
import { state } from "@/modules/auth/store/state";
import { mutations } from "@/modules/auth/store/mutations";
export const auth = {
    namespaced: true,
    actions,
    getters,
    state,
    mutations,
};
//# sourceMappingURL=index.js.map