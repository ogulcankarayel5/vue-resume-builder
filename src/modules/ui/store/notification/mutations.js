import { MutationTypes, } from "@/modules/ui/store/notification/types";
export const mutations = {
    [MutationTypes.PUSH_NOTIFICATION](state, payload) {
        state.notifications = [
            ...state.notifications,
            { ...payload, id: Math.random().toString(20) },
        ];
    },
    [MutationTypes.REMOVE_NOTIFICATION](state, payload) {
        console.log(payload);
        state.notifications = state.notifications.filter((notification) => {
            return notification.id !== payload;
        });
    },
};
//# sourceMappingURL=mutations.js.map