import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenu = defineStore('menu', () => {

    const classMenu = ref(false)

    const changeHomePage = () => {
        classMenu.value = !classMenu.value
    }

    return {
        classMenu,

        changeHomePage
    }
})