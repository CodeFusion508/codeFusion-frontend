import { defineStore } from "pinia";
import contentDays from "../Requests/contentDays";

export const useContentDays = defineStore("contentDays", {
    actions: {
        async getDaysByContentDays(uuid = "") {
            const data = await contentDays.getContentDaysRelationByDays(uuid);
            const tempContenDays = []
            data.node.forEach(value => {
                tempContenDays.push({
                    path: value._fields[0].properties.path,
                    title: value._fields[0].properties.title,
                })
            })
            this.contentDays = [ ... tempContenDays]
        }
    },
    state: () => {
        return { contentDays: [] }
    }
});