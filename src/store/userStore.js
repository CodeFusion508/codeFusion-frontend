import { defineStore } from "pinia";

/*
    You can name the return value of `defineStore()` anything you want,
    but it's best to use the name of the store and surround it with `use`
    and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
*/
export const useUserStore = defineStore("user", {
    // these actions are like actions + mutations, you can use these async as well
    actions: {
        updateUser() {
        },
        deleteUser() {
        },
        createUser() {
        },
        findUser() {
        },
    },
    // these are basically computed properties for our store,
    // I am not sure, but I think getters is to mutate?
    getters: {
        getAuthToken: (state) => state.userObj,
    },
    // this is our state
    state: () => {
        return {
            userObj: {
                name : "",
                uuid : ""
            }
        };
    }
});