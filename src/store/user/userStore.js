import { defineStore } from "pinia";

import router from "@/router/router.js";

import {
    getUserReq,
    createUserReq,
    createGoogleUserReq,
    verifyGUserReq,
    logInUserReq,
    updateUserReq,
    createRelation
} from "@/requests/clientRequest.js";


export const useUserStore = defineStore("user", {
    actions: {
        // User operations
        async createUser(userData) {
            const { data, token } = await createUserReq(userData);
            this.userObj.name = data.node.userName;
            this.userObj.uuid = data.node.uuid;
            localStorage.setItem("uuid", this.userObj.uuid);

            return token;
        }, async createGoogleUser(userData) {
            const { data, token } = await createGoogleUserReq(userData);

            this.userObj.name = data.node.userName;
            this.userObj.uuid = data.node.uuid;
            this.userObj.tkn = token;

            localStorage.setItem("uuid", this.userObj.uuid);
            localStorage.setItem("tkn", token);

            return token;
        }, async verifyUser(token) {
            const data = await verifyGUserReq(token);
            return data;
        }, async findUser() {
            const data = await getUserReq(this.userObj.uuid);
            this.userObj.email = data.node.email;
            this.userObj.name = data.node.userName;

            return data;
        }, async logInUser(userObj) {
            const { data, token } = await logInUserReq(userObj);

            this.userObj.name = data.node.userName;
            this.userObj.uuid = data.node.uuid;
            localStorage.setItem("uuid", this.userObj.uuid);

            return token;
        }, async updateUser() {
            await updateUserReq({
                userName: this.userObj.name,
                email: this.userObj.email,
                uuid: this.userObj.uuid,
                password: this.userObj.password
            });
        }, async createdRelation() {
            const response = await createRelation({
                contentUuid: this.uuidContent, op: "Content", relation: "COMPLETED"
            });

            if (response !== undefined) {
                router.push({ name: "lessons-day" });
            }
        }, // Store operations
        async cleanUser() {
            this.userObj = {
                name: null, uuid: null, email: null, avatar: { image: "", file: null }
            };

            localStorage.removeItem("uuid");
        }, setUuidContent(uuid = "") {
            this.uuidContent = uuid;
        }, setAvatar(avatar) {
            this.userObj.avatar = avatar;
        }
    }, state: () => {
        return {
            userObj: {
                name: "",
                uuid: localStorage.getItem("uuid") !== undefined || localStorage.getItem("uuid") !== null ? localStorage.getItem("uuid") : "",
                email: "",
                avatar: { image: "", file: null },
                tkn: localStorage.getItem("tkn") !== undefined || localStorage.getItem("tkn") !== null ? localStorage.getItem("tkn") : "",
                password: ""
            }, uuidContent: ""
        };
    }
});