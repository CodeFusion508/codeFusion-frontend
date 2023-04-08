import { defineStore } from "pinia";
import { getContentsRelationByDays } from "@/requests/daysRequest";
import { getSprintByUuid } from "@/requests/sprintsRequest";

export const useDaysStore = defineStore("days", {
    actions: {
        async getDaysByModule() {
            const data = await getSprintByUuid(this.sprintUuid);

            this.days = data.node.map(value => {
                return {
                    uuid : value.node.uuid,
                    desc : value.node.desc
                };
            });

        },
        async getByContent(uuid = "") {
            const tempContent = [];
            const data = await getContentsRelationByDays(uuid);

            if (data) {
                data.node.forEach((value) => {
                    const objTemp = {
                        title     : value.node.title,
                        path      : value.node.path,
                        exp       : value.node.exp,
                        desc      : value.node.desc,
                        labels    : value.node.labels,
                        link      : value.node.link || "",
                        contentNo : value.node.contentNo
                    };

                    if (objTemp.path) {
                        tempContent.push(objTemp);
                    }
                });

                this.result = [...tempContent];
            } else {
                const fakeObj = {
                    title     : "Aún no hay contenido disponible",
                    path      : "Aún no hay contenido disponible",
                    exp       : "Aún no hay contenido disponible",
                    desc      : "Aún no hay contenido disponible",
                    labels    : "Aún no hay contenido disponible",
                    contentNo : "Aún no hay contenido disponible",
                    link      : "Aún no hay contenido disponible"
                };
                this.result[0] = fakeObj;
            }
        },
        getDaysBySprintUuid(uuid) {
            this.sprintUuid = uuid;
        }
    },
    state: () => {
        return {
            days       : [],
            result     : [],
            sprintUuid : ""
        };
    }
});
