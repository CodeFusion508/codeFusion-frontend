import { defineStore } from "pinia";

export const useSprints = defineStore("sprints", {
    actions: {
        async setSprints(sprints) {
            this.sprints = sprints;
        }
    },
    state: () => {
        return {
            sprints: []
        };
    }
});