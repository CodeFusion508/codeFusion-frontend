import { defineStore } from "pinia";

import { getAllSprints} from "@/requests/sprintsRequest.js";

export const useSprintsStore = defineStore("sprints", {
    actions: {
        async getSprints() {
            const response = await getAllSprints();

            this.sprints = response.map(value => {
                return {
                  title : value.title,
                  desc  : value.desc,
                  uuid  : value.uuid
                };
              });
        }
    },
    state: () => {
        return {
            sprints: []
        };
    }
});