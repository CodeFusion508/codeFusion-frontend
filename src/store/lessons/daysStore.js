import { defineStore } from "pinia";

import { getContentsRelationByDays } from "@/requests/daysRequest.js";
import { getSprintByUuid } from "@/requests/sprintsRequest.js";

export const useDaysStore = defineStore("days", {
    actions: {
        async getDaysByModule() {
            const data = await getSprintByUuid(this.sprintUuid);

            this.days = data.node.map((value, index) => {
                const layout = index === 0
                return {
                    uuid  : value.node.uuid,
                    desc  : value.node.desc,
                    layout,
                    result: []
                };
            });

            await this.getByContent(0)
        },
        async getByContent(index = 0) {
            const uuid = this.days[index].uuid
            this.days[index].layout = !this.days[index].layout
            if(this.days[index].layout) {
                const data = await getContentsRelationByDays(uuid);
    
                this.result = [];
    
                if (!data) {
                    const fakeObj = {
                        title     : "Aún no hay contenido disponible",
                        path      : "Aún no hay contenido disponible",
                        exp       : "Aún no hay contenido disponible",
                        desc      : "Aún no hay contenido disponible",
                        labels    : "Aún no hay contenido disponible",
                        contentNo : "Aún no hay contenido disponible",
                        link      : "Aún no hay contenido disponible",
                        uuid      : ""
                    };
    
                    this.days[index].result.unshift(fakeObj);
                    return;
                }
    
                this.days[index].result = data.node.filter(value => value.node.path).map(value => {
                    return {
                        title     : value.node.title,
                        path      : value.node.path,
                        exp       : value.node.exp,
                        desc      : value.node.desc,
                        labels    : value.node.labels,
                        link      : value.node.link || "",
                        contentNo : value.node.contentNo,
                        uuid      : value.node.uuid
                    };
                });
            }

        },
        setDaysBySprintUuid(uuid) {
            this.sprintUuid = uuid;
        },
    },
    state: () => {
        return {
            days       : [],
            result     : [],
            sprintUuid : ""
        };
    }
});