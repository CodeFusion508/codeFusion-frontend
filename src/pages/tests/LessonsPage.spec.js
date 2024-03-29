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
    beforeAll,
    vi
} from "vitest";

import LessonsPage from "@/pages/LessonsPage.vue";
import { useDaysStore } from "@/store/lessons/daysStore.js";
import { useSprintsStore } from "@/store/lessons/sprintsStore.js";


describe("LessonsPage Tests", () => {
    let wrapper;
    let daysStore;
    let sprintsStore;

    beforeAll(() => {
        wrapper = mount(LessonsPage, {
            global: {
                plugins: [createTestingPinia()]
            }
        });

        daysStore = useDaysStore();
        sprintsStore = useSprintsStore();
        sprintsStore.sprints = {
            "Seccion_1": [{
                "title"  : "Sprint 1",
                "desc"   : "Sprint 1 description",
                "days"   : ["day1", "day2", "day3"],
                "result" : ["result1", "result2", "result3"]
            }]
        };
        daysStore.days = ["day1", "day2", "day3"];
        daysStore.result = ["result1", "result2", "result3"];
    });

    it("Should render LessonsPage component", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("Verify title to be shown correctly", () => {
        expect(wrapper.find("h5").text()).toBe("Sprint 1");
    });

    it("Verify description to be shown correctly", () => {
        expect(wrapper.find("p").text()).toBe("Sprint 1 description");
    });

    it("Should run changeRouteLessons when click on button Aprende", () => {
        const spy = vi.fn();

        wrapper.vm.changeRouteLessons = spy;
        wrapper.findAll("button")[1].trigger("click");

        expect(spy).toHaveBeenCalled();
    });
});