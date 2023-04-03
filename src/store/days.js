import { defineStore } from "pinia";
import { getDaysRequest } from "../Requests/daysRequest";

export const useDays = defineStore("days", {
    actions: {
        async getDays() {
            const data = await getDaysRequest()
            const newArrayDays = data.node.map(value => {
                value["title"] = value.properties.desc
                value["uuid"] = value.properties.uuid
                return value
            })
            this.days = [ ... newArrayDays ]
            return newArrayDays
        }
    },
    state: () => {
        return { days: [] }
    }
});