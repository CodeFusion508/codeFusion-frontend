import { createTestingPinia } from "@pinia/testing"

import{
describe, it, expect
} from "vitest";
import { fn } from "@vitest/spy";
import HomePage from "./src/pages/HomePage.vue";
import { mount } from "@vue/test-utils";
import {useAuthStore} from "@/store/user/authStore.js";

const wrapper = mount(HomePage, {
    global: {
        plugins: [createTestingPinia({createSpy: fn})]
    }
});

describe("HomePage", () => {
    it("should render home page", () => {
        const authStore = useAuthStore();
        const wrapper = mount(HomePage, { });
        expect(wrapper.text()).toContain("Code");
    });
});