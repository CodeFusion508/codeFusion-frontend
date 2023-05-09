import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
    actions: {
        async verifyUser(data) {
            if(!data.hasOwnProperty("node")) {
                this.amount += 1;
                this.passwordExists = false;
            }
        }
    },
    state: () => {
        return {
            amount         : 0,
            emailVerified  : false,
            passwordExists : true,
            fullName       : false
        };
    }
});