import { defineStore } from "pinia";
import { createRelation } from '@/requests/clientRequest'

import {
    getUserReq,
    createUserReq,
    logInUserReq,
    updateUserReq
} from "@/requests/clientRequest.js";
import router from "../router/router";


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
        },
        setUuidContent(uuid = "") {
            this.uuidContent = uuid
        },
        getUuidContent() {
            return this.uuidContent
        },
        async createdRelation() {
            const response = await createRelation({ contentUuid: this.uuidContent, op: 'Content', relation: 'Completed' })
            if(response != undefined) {
                router.push({ name: 'leasseans-day' })
            }
        }
    },
    state: () => {
        return {
            userObj: {
                name   : "",
                uuid   : localStorage.getItem("uuid") !== undefined || localStorage.getItem("uuid") !== null ? localStorage.getItem("uuid") : "",
                email  : "",
                avatar : { image: "", file: null }
            },
            uuidContent: ""
        };
    }
});