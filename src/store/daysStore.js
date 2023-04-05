import { defineStore } from "pinia";
import { getDaysRequest, getContentsRelationByDays } from "../requests/daysRequest";

export const useDaysStore = defineStore("days", {
    actions: {
        async getDays() {
            const data = await getDaysRequest();
            /*const newArrayDays = data.node.map(value => {
                const objTemp = {
                    title: value._fields[0].properties.desc, uuid: value._fields[0].properties.uuid
                };
                return objTemp;
            });
            this.days = [...newArrayDays];*/
            this.days = [...data.node];
            return data;
            //return newArrayDays;
        },
        async getByContent(uuid = "") {
            const data = await getContentsRelationByDays(uuid);
            console.log(data);
            const tempContent = [];

            data.node.forEach((value) => {
                const objTemp = {
                    title: value.node.title,
                    path : value.node.path,
                    exp: value.node.exp,
                };
                tempContent.push(objTemp);
            });

            this.result = [...tempContent];
        }
    },
    state: () => {
        return {
            days: [],
            result: []
        };
    }
});