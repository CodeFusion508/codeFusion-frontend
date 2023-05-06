import { defineStore } from "pinia";

import { getAllSprints } from "@/requests/sprintsRequest.js";

export const useSprintsStore = defineStore("sprints", {
    actions: {
        async getSprints() {
            const response = await getAllSprints();
            this.sprints = response;
        }
    },
    state: () => {
        return {
            sprints: []
        };
    }
});