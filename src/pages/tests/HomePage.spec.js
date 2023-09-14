// Configurations
import { mount, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import NavBar from "@/components/NavBar.vue";
import NavFooter from "@/components/NavFooter.vue";
import router from "@/router/router.js";

config.global.components["nav-bar"] = NavBar;
config.global.components["nav-footer"] = NavFooter;
config.global.plugins.push(router);

// Test
import {
    describe,
    it,
    expect,
    beforeEach
} from "vitest";

import { useAuthStore } from "@/store/user/authStore.js";
import HomePage from "@/pages/HomePage.vue";


describe("Logged In Tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(HomePage, {
            global: {
                plugins: [createTestingPinia()]
            }
        });

        const store = useAuthStore();
        store.authToken = "Super Secret Token";
    });

    it("Should render logged in component", () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.findAllComponents({ name: "logged-in" }).length).toBe(1);
        expect(wrapper.findAllComponents({ name: "logged-out" }).length).toBe(0);
    });
});

describe("Logged Out Tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(HomePage, {
            global: {
                plugins: [createTestingPinia()]
            }
        });

        const store = useAuthStore();
        store.authToken = undefined;
    });

    it("Should render logged out component", () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.findAllComponents({ name: "logged-out" }).length).toBe(1);
        expect(wrapper.findAllComponents({ name: "logged-in" }).length).toBe(0);
    });
});