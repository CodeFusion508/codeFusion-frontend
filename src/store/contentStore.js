import { defineStore } from "pinia";

import { getMD } from "../requests/contentRequest.js";

export const useContentStore = defineStore("content", {
    actions: {
        async getText(path) {
            this.lesson = await getMD(path);
            return this.lesson;
        },
        selectContent(index) {
            this.contIndex = index;
        },
        setUuid(uuid) {
            this.uuid = uuid;
        }
    },
    state: () => {
        return {
            lesson    : "",
            contIndex : 0,
            uuid      : ""
        };
    }
});