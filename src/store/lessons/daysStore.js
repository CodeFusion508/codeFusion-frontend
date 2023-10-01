import { defineStore } from "pinia";

import { getSprintByUuid } from "@/requests/sprintsRequest.js";
import { useSprintsStore } from "./sprintsStore.js";

export const useDaysStore = defineStore("days", {
    actions: {
        async getDaysByModule() {
            const sprintsStore = useSprintsStore();
            const data = await getSprintByUuid(sprintsStore.sprintUuid);

            this.days = data.node.map(value => {
                return {
                    uuid : value.node.uuid,
                    desc : value.node.desc
                };
            });
        }
    },
    state: () => {
        return {
            days: []
        };
    }
});