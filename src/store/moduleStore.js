import { defineStore } from "pinia";

import {
    getMD
} from "../Requests/clientRequest.js";
import { getDaysRequest } from "../Requests/daysRequest.js";

export const useModuleStore = defineStore("module", {
    actions: {
        async getText(path) {
            const data = await getMD(path);

            return data;
        },
        async getDays() {
            const data = await getDaysRequest();
            console.log(data);
            return data;
        }
    },
    getters: {
        getLesson: (state) => state.lesson,
    },
    state: () => {
        return {
            lesson: ""
        };
    }
});