import { defineStore } from "pinia";

import {
    getUserReq,
    createUserReq
} from "../clientRequest.js";

export const useUserStore = defineStore("user", {
    actions: {
        updateUser() {
        },
        deleteUser() {
        },
        async createUser(userData) {
            const data = await createUserReq(userData);

            this.userObj.name = userData.name;

            return data;
        },
        async findUser(uuid) {
            const data = await getUserReq(uuid);

            return data;
        },
    },
    getters: {
        getUserInfo: (state) => state.userObj,
    },
    state: () => {
        return {
            userObj: {
                name : "",
                uuid : ""
            }
        };
    }
});