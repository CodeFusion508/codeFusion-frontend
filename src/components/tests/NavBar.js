/**import { createTestingPinia } from "@pinia/testing";

import{
    describe, it, expect, vi
} from "vitest";
import { fn } from "@vitest/spy";
import NavBar from "@/components/NavBar.vue";
import {mount, shallowMount} from "@vue/test-utils";
import {useUserStore} from "@/store/user/userStore.js";
import {useAuthStore} from "@/store/user/authStore.js";

vi.mock("vue-router");

const wrapper = shallowMount(NavBar, {
    global: {
        plugins: [createTestingPinia({initialState: { NavBar } ,createSpy: fn})]
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
});*/