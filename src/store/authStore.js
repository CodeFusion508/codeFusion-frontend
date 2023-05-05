import router from "@/router/router.js";

import { defineStore } from "pinia";

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
            localStorage.removeItem("tkn");
            router.push({ path: "/" });
            this.authToken = null;
        }
    },
    state: () => {
        return {
            authToken: localStorage.getItem("tkn")
        };
    }
});
