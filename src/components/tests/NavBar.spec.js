// Configurations
import { mount, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import router from "@/router/router.js";

config.global.plugins.push(router);

// Test
import {
    describe,
    it,
    expect,
    beforeAll
} from "vitest";

import NavBar from "@/components/NavBar.vue";
import { useUserStore } from "@/store/user/userStore.js";
import { useAuthStore } from "@/store/user/authStore.js";

describe("NavBar", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(NavBar, {
            global: {
                plugins: [createTestingPinia()]
            }
        });

        const userStore = useUserStore();
        const authStore = useAuthStore();

        userStore.userObj = {
            name     : "Async Researcher",
            uuid     : "735c4bff-42a8-4302-a9be-feb377b383c0",
            email    : "AsyncResearch@mail.gov",
            avatar   : { image: "Async Logo", file: null },
            tkn      : "someToken",
            password : "password"
        };
        authStore.authToken = "someToken";
    });

    it("Should have navigation text buttons", () => {
        expect(wrapper.text()).toContain("Inicio");
        expect(wrapper.text()).toContain("De nosotros");
        expect(wrapper.text()).toContain("Lecciones");
        expect(wrapper.text()).toContain("Artículos");
        expect(wrapper.text()).toContain("Async Researcher");
    });
});