import {
    describe,
    it,
    expect,
    beforeEach
} from "vitest";
import { fn } from "@vitest/spy";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import { useAuthStore } from "@/store/user/authStore.js";
import HomePage from "@/pages/HomePage.vue";


describe("Logged In Tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(HomePage, {
            global: {
                plugins: [createTestingPinia({ createSpy: fn })]
            }
        });

        const store = useAuthStore();
        store.authToken = "dasdasd";
    });

    it("Should render logged in component", () => {
        expect(wrapper.findAllComponents({ name: "logged-in" }).length).toBe(1);
        expect(wrapper.findAllComponents({ name: "logged-out" }).length).toBe(0);
    });
});

describe("Logged Out Tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(HomePage, {
            global: {
                plugins: [createTestingPinia({ createSpy: fn })]
            }
        });

        const store = useAuthStore();
        store.authToken = undefined;
    });

    it("Should render logged out component", () => {
        expect(wrapper.findAllComponents({ name: "logged-out" }).length).toBe(1);
        expect(wrapper.findAllComponents({ name: "logged-in" }).length).toBe(0);
    });
});