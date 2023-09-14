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

import AboutUs from "@/pages/AboutUs.vue";


describe("AboutUs Tests", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(AboutUs, {
            global: {
                plugins: [createTestingPinia()]
            }
        });
    });

    it("Should render AboutUs component", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("Should load image from URL", () => {
        expect(wrapper.find("img").attributes("src")).not.toBe("");
        expect(wrapper.find("img").attributes("src")).not.toBe(null);
        expect(wrapper.html()).toContain("https://avatars.githubusercontent.com/u/61888719?v=4");
    });
});