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
    beforeAll
} from "vitest";

import DayPage from "@/pages/lessons/DayPage.vue";
import { useDaysStore } from "@/store/lessons/daysStore.js";


describe("DayPage Tests", () => {
    let wrapper;
    let daysStore;

    beforeAll(() => {
        wrapper = mount(DayPage, {
            global: {
                plugins: [createTestingPinia()]
            }
        });

        daysStore = useDaysStore();
        daysStore.days = [{ uuid: "1", desc: "Sprint 1 description" }];
        daysStore.result = [];
        daysStore.sprintUuid = "testResult";
    });

    it("should load TimeLine component", function () {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.findAllComponents({ name: "time-line" }).length).toBe(1);
    });
});