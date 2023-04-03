import { defineStore } from "pinia";
import { getDaysRequest } from "../Requests/daysRequest";

export const useDays = defineStore("days", {
    actions: {
        async getDays() {
            const data = await getDaysRequest()
            const newArrayDays = data.node.map(value => {
                const objTemp = {
                    title: value._fields[0].properties.desc, uuid: value._fields[0].properties.uuid
                }
                return objTemp
            })
            this.days = [ ... newArrayDays ]
            return newArrayDays
        }
    },
    state: () => {
        return { days: [] }
    }
});