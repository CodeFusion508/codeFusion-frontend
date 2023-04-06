import { defineStore } from "pinia";

import { getMD, getDaysRequest } from "../requests/daysRequest.js";

export const useModuleStore = defineStore("module", {
    actions: {
        async getText(path) {
            const data = await getMD(path);

            return data;
        }
    },
    getters: {
        getLesson: (state) => state.lesson
    },
    state: () => {
        return {
            lesson: ""
        };
    }
});