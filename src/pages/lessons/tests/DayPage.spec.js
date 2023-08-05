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
        wrapper = mount(DayPage, {
            global: {
                plugins: [createTestingPinia({ createSpy: fn })]
            }
        });

        daysStore = useDaysStore();
        daysStore.days = [ { uuid: "1", desc: "Sprint 1 description" } ];
        daysStore.result = [];
        daysStore.sprintUuid = "testResult";
        });

    it("should load TimeLine component", function () {
        expect(wrapper.findComponent({ name: "TimeLine" }).exists()).toBe(true);
    });
    it("Verify title to be shown correctly", () => {
        expect(wrapper.find("h5").text()).toBe("Sprint 1");
    });
    it("Verify description to be shown correctly", () => {
        expect(wrapper.find("p").text()).toBe("Sprint 1 description");
    });
    it("Should run changeRouteLessons when click on button Aprende", () => {
        const spy = fn();
        wrapper.vm.changeRouteLessons = spy;
        wrapper.find("button").trigger("click");
        expect(spy).toHaveBeenCalled();
    });
});