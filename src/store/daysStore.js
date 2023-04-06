import { defineStore } from "pinia";
import { getDaysRequest, getContentsRelationByDays } from "@/requests/daysRequest";

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
            const tempContent = [];

            try {
                const data = await getContentsRelationByDays(uuid);
                if (data !== undefined) {
                    data.node.forEach((value) => {
                        const objTemp = {
                            title : value.node.title,
                            path  : value.node.path,
                            exp   : value.node.exp,
                            desc  : value.node.desc,
                            label : value.node.label
                        };

                        if (objTemp.path !== undefined) {
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
            catch (error) {
                this.result = [];
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