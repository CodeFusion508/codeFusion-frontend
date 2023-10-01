import { defineStore } from "pinia";

import { getAllSprints } from "@/requests/sprintsRequest.js";

export const useSprintsStore = defineStore("sprints", {
    actions: {
        async getSprints() {
            this.sprints = await getAllSprints();
        },
        setDaysBySprintUuid(uuid) {
            this.sprintUuid = uuid;
        }
    },
    state: () => {
        return {
            sprints    : [],
            sprintUuid : ""
        };
    }
});