import { createTestingPinia } from "@pinia/testing";
import{ describe, it, expect, beforeEach } from "vitest";
import { fn } from "@vitest/spy";
import { mount } from "@vue/test-utils";
import {useAuthStore} from "@/store/user/authStore.js";
import HomePage from "@/pages/HomePage.vue";

let wrapper;


describe("Logged In", () => {
    beforeEach(() => {
        wrapper = mount(HomePage, {
            global: {
                plugins: [createTestingPinia({createSpy: fn})]
            }
        });
        const store = useAuthStore();
        store.authToken = "dasdasd";
    });
    it("should render logged in component", () => {
        console.log(wrapper.findAllComponents({name: "logged-in"}));
        expect(wrapper.findAllComponents({name: "logged-in"}).length).toBe(1);
        expect(wrapper.findAllComponents({name: "logged-out"}).length).toBe(0);
    });
});

describe("Logged Out", () => {
    beforeEach(() => {
        wrapper = mount(HomePage, {
            global: {
                plugins: [createTestingPinia({createSpy: fn})]
            }
        });
        const store = useAuthStore();
        store.authToken = undefined;
    });
    it("should render logged out component", () => {
        console.log(wrapper.findAllComponents({name: "logged-out"}));
        expect(wrapper.findAllComponents({name: "logged-out"}).length).toBe(1);
        expect(wrapper.findAllComponents({name: "logged-in"}).length).toBe(0);
    });
});