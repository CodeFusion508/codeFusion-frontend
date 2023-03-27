import { defineStore } from "pinia";

export const storeToast = defineStore('storeToast', {
    state: () => ({ layout: false, text: "", title: "" }),
    actions: {
        Activeted(data = { text: "", title: "", time: 0 }) {
            this.text = data.text
            this.title = data.title
            this.layout = true
            if(data.time === undefined) {
                data.time = 2000
            }
            setTimeout(() => {
                this.layout = false
                this.text = ""
                this.title = ""
            }, data.time)
        }
    }
})