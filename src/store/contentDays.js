import { defineStore } from "pinia";
import contentDays from "../Requests/contentDays";

export const useContentDays = defineStore("contentDays", {
    actions: {
        async getDaysByContentDays(uuid = "") {
            const data = await contentDays.getContentDaysRelationByDays(uuid);
            const tempContenDays = []
            data.forEach(value => {
                tempContenDays.push({
                    path: value.path,
                    title: value.title,
                })
            })
            this.contentDays = [ ... tempContenDays]
        }
    },
    state: () => {
        return { contentDays: [] }
    }
});