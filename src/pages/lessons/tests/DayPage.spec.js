import { createTestingPinia } from "@pinia/testing";
import {
    describe,
    it,
    expect,
    beforeAll
} from "vitest";
import { fn } from "@vitest/spy";
import { mount } from "@vue/test-utils";

import DayPage from "@/pages/lessons/DayPage.vue";
import { useDaysStore} from "@/store/lessons/daysStore.js";


describe("DayPage Tests", () => {
    let wrapper;
    let daysStore;

    beforeAll(() => {
        const mockRouter = {
            push: fn()
        };
        const mockRoute = {
            params: {
                uuid: "testResult"
            }
        };
        wrapper = mount(DayPage, {
            global: {
                plugins : [createTestingPinia({ createSpy: fn })],
                mocks   : {
                    $route  : mockRoute,
                    $router : mockRouter
                }
            }
        });

        daysStore = useDaysStore();
        daysStore.days = [ { uuid: "1", desc: "Sprint 1 description" } ];
        daysStore.result = [];
        daysStore.sprintUuid = "testResult";

        });

    it("should load TimeLine component", function () {
        expect(wrapper.findAllComponents({ name: "time-line" }).length).toBe(1);
    });
});