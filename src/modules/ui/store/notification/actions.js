import { ActionTypes, MutationTypes, } from "@/modules/ui/store/notification/types";
export const actions = {
    async [ActionTypes.PUSH_NOTIFICATION]({ commit }, payload) {
        commit(MutationTypes.PUSH_NOTIFICATION, payload);
    },
    [ActionTypes.REMOVE_NOTIFICATION]({ commit }, payload) {
        commit(MutationTypes.REMOVE_NOTIFICATION, payload);
    },
};
//# sourceMappingURL=actions.js.map