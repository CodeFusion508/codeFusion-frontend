import {
    describe,
    it,
    expect,
    beforeAll
} from "vitest";
import { mount } from "@vue/test-utils";

import AboutUs from "@/pages/AboutUs.vue";


describe("AboutUs Tests", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(AboutUs);
    });

    it("Should render AboutUs view", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("Should load image from URL", function () {
        expect(wrapper.find("img").attributes("src")).not.toBe("");
        expect(wrapper.find("img").attributes("src")).not.toBe(null);
        expect(wrapper.find("img").attributes("src")).toBe("https://avatars.githubusercontent.com/u/61888719?v=4");
    });
});