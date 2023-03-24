import { defineStore } from "pinia";

import {
    getUserReq,
    createUserReq,
    logInUserReq,
} from "../clientRequest.js";


export const useUserStore = defineStore("user", {
    actions: {
        updateUser() {
        },
        deleteUser() {
        },
        async createUser(userData) {
            const { data, token } = await createUserReq(userData);

            this.userObj.name = data.records[0].properties.userName;
            this.userObj.uuid = data.records[0].properties.uuid;

            return token;
        },
        async findUser(uuid) {
            const data = await getUserReq(uuid);

            return data;
        },
        async logInUser(userObj) {
            const { token, data } = await logInUserReq(userObj)

            this.userObj.name = data.userName;
            this.userObj.uuid = data.uuid;
            return token;
        }
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