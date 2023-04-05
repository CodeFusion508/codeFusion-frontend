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
            console.log("entered to getByContent");
            const tempContent = [];
            try {
                const data = await getContentsRelationByDays(uuid);
                if (data !== undefined) {
                console.log(data, "data received from daysRequest");

                data.node.forEach((value) => {
                    const objTemp = {
                        title : value.node.title,
                        path  : value.node.path,
                        exp   : value.node.exp,
                        desc  : value.node.desc,
                        label : value.node.label
                    };
                    console.log(objTemp, "objTemp");
                    if (objTemp.path !== undefined) {
                        tempContent.push(objTemp);
                    }
                });
                    console.log(tempContent, "tempContent");
                this.result = [...tempContent];
                console.log(this.result, "result");
                }
                else {
                    console.log("data is undefined");
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
                console.log(error);
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