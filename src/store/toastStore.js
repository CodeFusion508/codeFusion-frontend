import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
    actions: {
        Activated(data = {
            text  : "",
            title : "",
            time  : 0
        }) {
            this.text = data.text;
            this.title = data.title;
            this.layout = true;

            if (data.time === undefined) {
                data.time = 7000;
            }

            setTimeout(() => {
                this.layout = false;
                this.text = "";
                this.title = "";
            }, data.time);
        }
    },
    state: () => {
        return {
            layout : false,
            text   : "",
            title  : ""
        };
    }
});