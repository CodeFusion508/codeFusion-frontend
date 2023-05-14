import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
    actions: {
        activate(data = {
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
                this.close();
            }, data.time);
        },
        close() {
            this.layout = false;
            this.text = "";
            this.title = "";
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