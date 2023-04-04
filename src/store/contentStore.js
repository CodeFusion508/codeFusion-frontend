import { defineStore } from "pinia";
import { getContentsRelationByDays } from "../requests/contentDays.js";

export const useContentStore = defineStore("content", {
    actions: {
        async getByContent(uuid = "") {
            const data = await getContentsRelationByDays(uuid);
            const tempContent = [];

            data.forEach(value => {
                tempContent.push({
                    path  : value.path,
                    title : value.title,
                });
            });

            this.content = [...tempContent];
        }
    },
    state: () => {
        return { result: [] };
    }
});