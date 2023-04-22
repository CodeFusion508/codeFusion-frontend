import { defineStore } from "pinia";

import {
    getUserReq,
    createUserReq,
    createGoogleUserReq,
    verifyGUserReq,
    logInUserReq,
    updateUserReq,
    createRelation
} from "@/requests/clientRequest.js";
import router from "../router/router";


export const useUserStore = defineStore("user", {
    actions: {
        // Basic User Operations
        async createUser(userData) {
            const { data, token } = await createUserReq(userData);

            this.userObj.name = data.node.userName;
            this.userObj.uuid = data.node.uuid;
            localStorage.setItem("uuid", this.userObj.uuid);

            return token;
        },
        async createGoogleUser(userData) {
            const { data, token } = await createGoogleUserReq(userData);

            this.userObj.name = data.node.userName;
            this.userObj.uuid = data.node.uuid;
            localStorage.setItem("uuid", this.userObj.uuid);

            return token;
        },
        async verifyUser() {
            const { data } = await verifyGUserReq();
            console.log(data, "verifying user in user store");
            return data;
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
        async createdRelation() {
            const response = await createRelation({
                contentUuid : this.uuidContent,
                op          : "Content",
                relation    : "COMPLETED"
            });

            if (response !== undefined) {
                router.push({ name: "lessons-day" });
            }
        },
        // Store Operations such as logOut aka cleanUser
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
            this.uuidContent = uuid;
        },
        getUuidContent() {
            return this.uuidContent;
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