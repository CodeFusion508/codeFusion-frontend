import { defineStore } from "pinia";

import { getMD } from "../requests/daysRequest.js";

export const useContentStore = defineStore("content", {
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