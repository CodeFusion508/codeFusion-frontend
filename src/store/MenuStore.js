import { defineStore } from "pinia";

export const useMenuStore = defineStore("MenuStore", {
    actions: {
        changeHomePage () {
            this.classMenu = !this.classMenu;
        }
    },
    state: () => {
        return {
            classMenu: false
        };
    }
});