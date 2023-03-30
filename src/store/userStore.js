import { defineStore } from "pinia";

import {
    getUserReq,
    createUserReq,
    logInUserReq,
    updateUser
} from "../clientRequest.js";


export const useUserStore = defineStore("user", {
    actions: {
        async createUser(userData) {
            const { data, token } = await createUserReq(userData);

            this.userObj.name = data.node.properties.userName;
            this.userObj.uuid = data.node.properties.uuid;

            return token;
        },
        async findUser() {
            const data = await getUserReq(this.userObj.uuid);

            this.userObj.email = data.node.properties.email;
            this.userObj.name = data.node.properties.userName;

            return data;
        },
        async logInUser(userObj) {
            const { data, token } = await logInUserReq(userObj);

            this.userObj.name = data.node.properties.userName;
            this.userObj.uuid = data.node.properties.uuid;

            localStorage.setItem("uuid", this.userObj.uuid);

            return token;
        },
        async updatedUser() {
            await updateUser({
                userName : this.userObj.name,
                email    : this.userObj.email,
                uuid     : this.userObj.uuid
            });
        }
    },
    getters: {
        getUserInfo: (state) => state.userObj,
    },
    state: () => {
        return {
            userObj: {
                name   : "",
                uuid   : localStorage.getItem("uuid") != undefined || localStorage.getItem("uuid") != null ? localStorage.getItem("uuid") : "",
                email  : "",
                avatar : { image: "", file: null }
            }
        };
    }
});