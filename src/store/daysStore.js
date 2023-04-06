import { defineStore } from "pinia";
import { getDaysRequest, getContentsRelationByDays } from "@/requests/daysRequest";

export const useDaysStore = defineStore("days", {
    actions: {
        async getDays() {
            const data = await getDaysRequest();

            this.days = [...data.node];

            return data;
        },
        async getByContent(uuid = "") {
            const tempContent = [];
            const data = await getContentsRelationByDays(uuid);

            if (data) {
                data.node.forEach((value) => {
                    const objTemp = {
                        title : value.node.title,
                        path  : value.node.path,
                        exp   : value.node.exp,
                        desc  : value.node.desc,
                        label : value.node.label
                    };

                    if (objTemp.path) {
                        tempContent.push(objTemp);
                    }
                });

                this.result = [...tempContent];
            }
            else {
                const fakeObj = {
                    title : "Aún no hay contenido disponible",
                    path  : "Aún no hay contenido disponible",
                    exp   : "Aún no hay contenido disponible",
                    desc  : "Aún no hay contenido disponible",
                    label : "Aún no hay contenido disponible"
                };
                this.result[0] = fakeObj;
            }
        }
    },
    state: () => {
        return {
            days   : [],
            result : []
        };
    }
});