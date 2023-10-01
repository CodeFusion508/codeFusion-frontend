import { defineStore } from "pinia";

import { getContentsRelationByDays } from "@/requests/daysRequest.js";
import { getMD } from "@/requests/contentRequest.js";

export const useContentStore = defineStore("content", {
    actions: {
        async getText(path) {
            const content = await getMD(path);
            this.lesson = content;

            return this.lesson;
        },
        async getByContent(uuid = "") {
            const data = await getContentsRelationByDays(uuid);

            this.result = [];
            this.result = data.node;
        }
    },
    state: () => {
        return {
            lesson    : "",
            contIndex : 0,
            result    : []
        };
    }
});