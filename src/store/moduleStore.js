import { defineStore } from "pinia";

import { getMD } from "../requests/daysRequest.js";

export const useModuleStore = defineStore("module", {
    actions: {
        async getText(path) {
            const data = await getMD(path);

            return data;
        }
    },
    state: () => {
        return {
            lesson: ""
        };
    }
});