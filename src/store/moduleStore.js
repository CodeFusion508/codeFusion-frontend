import { defineStore } from "pinia";

import {
    getMD
} from "../clientRequest.js";

export const useModuleStore = defineStore("module", {
    actions: {
        getLesson(path) {
            const data = getMD(path);

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