import {
    describe,
    it,
    expect
} from "vitest";
import { mount } from "@vue/test-utils";

import LoggedIn from "@/modules/HomePage/LoggedIn.vue";


describe("LoggedIn", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(LoggedIn, {});
    });

    it("should render logged in landing site", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("should show title", () => {
        expect(wrapper.text()).toContain("Weekly");
    });

    it("should show completion bar", () => {
        expect(wrapper.find(".fill").exists()).toBe(true);
    });
});