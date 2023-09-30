import { defineStore } from "pinia";

import { getContentsRelationByDays } from "@/requests/daysRequest.js";
import { getSprintByUuid } from "@/requests/sprintsRequest.js";

export const useDaysStore = defineStore("days", {
    actions: {
        async getDaysByModule() {
            const data = await getSprintByUuid(this.sprintUuid);

            this.days = data.node.map(value => {
                return {
                    uuid : value.node.uuid,
                    desc : value.node.desc
                };
            });
        },
        async getByContent(uuid = "") {
            const data = await getContentsRelationByDays(uuid);

            this.result = [];
            this.result = data.node;
        },
        setDaysBySprintUuid(uuid) {
            this.sprintUuid = uuid;
        }
    },
    state: () => {
        return {
            days       : [],
            result     : [],
            sprintUuid : ""
        };
    }
});