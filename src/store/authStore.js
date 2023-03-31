import { defineStore } from "pinia";

import router from "../router/router.js";

export const useAuthStore = defineStore("auth", {
    actions: {
        addAuthToken(token) {
            if (token) {
                this.authToken = token;
                localStorage.setItem("tkn", token);

                router.push({ path: "/" });
            }
        },
        delAuthToken() {

        }
    },
    getters: {
        getAuthToken: (state) => state.authToken,
    },
    state: () => {
        return {
            authToken: localStorage.getItem("tkn")
        };
    },
});
