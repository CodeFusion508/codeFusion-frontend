import { createTestingPinia } from "@pinia/testing";

import{
    describe, it, expect
} from "vitest";
import { fn } from "@vitest/spy";
import NavBar from "@/components/NavBar.vue";
import { mount } from "@vue/test-utils";
import {useUserStore} from "@/store/user/userStore.js";
import {useAuthStore} from "@/store/user/authStore.js";
import router from "@/router/router.js";

let routes = [
    {
        title     : "Inicio",
        path      : "/",
        activated : false,
        meta      : "initialize"
    },
    {
        title     : "De nosotros",
        path      : "/nosotros",
        activated : false,
        meta      : "about"
    },

    {
        title     : "Lecciones",
        path      : "/lecciones",
        activated : false,
        meta      : "lessons"
    },
    {
        title     : "Artículos",
        path      : "/articulos",
        activated : false,
        meta      : "articles"
    }
];
const wrapper = mount(NavBar, {
    global: {
        plugins: [createTestingPinia({initialState: { NavBar: { routes: routes, $router: router } } ,createSpy: fn})]
    },
    props: {
        routes: routes
    }
});
const userStore = useUserStore();
const authStore = useAuthStore();
userStore.userObj = {
    name     : "Juan",
    uuid     : "juanito",
    email    : "juan@juan.com",
    avatar   : { image: "fotDeJuan", file: null },
    tkn      : "someToken",
    password : "soyJuan"
};
authStore.authToken = "someToken";

describe("NavBar", () => {
    it("should render navbar component", () => {
        expect(wrapper.text()).toContain("Inicio");
        expect(wrapper.text()).toContain("De nosotros");
        expect(wrapper.text()).toContain("Lecciones");
        expect(wrapper.text()).toContain("Artículos");
        expect(wrapper.html().toString()).toContain("navbar");
    });
});