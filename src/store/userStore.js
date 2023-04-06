import { defineStore } from "pinia";

import {
    getUserReq,
    createUserReq,
    logInUserReq,
    updateUserReq
} from "@/requests/clientRequest.js";


export const useUserStore = defineStore("user", {
    actions: {
        async createUser(userData) {
            const { data, token } = await createUserReq(userData);

            this.userObj.name = data.node.userName;
            this.userObj.uuid = data.node.uuid;
            localStorage.setItem("uuid", this.userObj.uuid);

            return token;
        },
        async findUser() {
            const data = await getUserReq(this.userObj.uuid);

            this.userObj.email = data.node.email;
            this.userObj.name = data.node.userName;

            return data;
        },
        async logInUser(userObj) {
            const { data, token } = await logInUserReq(userObj);

            this.userObj.name = data.node.userName;
            this.userObj.uuid = data.node.uuid;
            localStorage.setItem("uuid", this.userObj.uuid);

            return token;
        },
        async updatedUser() {
            await updateUserReq({
                userName : this.userObj.name,
                email    : this.userObj.email,
                uuid     : this.userObj.uuid
            });
        },
        async cleanUser() {
            this.userObj = {
                name   : null,
                uuid   : null,
                email  : null,
                avatar : { image: "", file: null }
            };

            localStorage.removeItem("uuid");
        }
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