import { defineStore } from "pinia";

// import { getMD } from "../requests/daysRequest.js";

export const useSprints = defineStore("sprints", {
    actions: {
        async setSprints(sprints = []) {
            this.sprints = sprints
        }
    },
    state: () => {
        return {
            sprints: []
        };
    }
});