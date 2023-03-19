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
        async createUser() {
            const data = await createUserReq();

            return data;
        },
        async findUser() {
            const data = await getUserReq();

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