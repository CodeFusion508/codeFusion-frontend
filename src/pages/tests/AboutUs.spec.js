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

    it("Should render AboutUs view", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("Should load image from URL", function () {
        expect(wrapper.find("img").attributes("src")).not.toBe("");
        expect(wrapper.find("img").attributes("src")).not.toBe(null);
        expect(wrapper.findAll("img")[1].wrapperElement.attributes["0"].value).toBe("https://avatars.githubusercontent.com/u/61888719?v=4");
    });
});