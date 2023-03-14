import { defineStore } from "pinia";

/*
    You can name the return value of `defineStore()` anything you want,
    but it's best to use the name of the store and surround it with `use`
    and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
*/
export const useAuthStore = defineStore("auth", {
    // these actions are like actions + mutations, you can use these async as well
    actions: {
        increment() {
            this.count++;
        },
    },
    // these are basically computed properties for our store,
    // I am not sure, but I think getters is to mutate?
    getters: {
        getCount: (state) => state.count * 2,
    },
    // this is our state
    state: () => {
        return {
            count : 0,
            name  : "User"
        };
    }
});
