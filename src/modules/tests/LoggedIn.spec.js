import {
    describe,
    it,
    expect,
    beforeAll
} from "vitest";
import { mount } from "@vue/test-utils";

import LoggedIn from "@/modules/HomePage/LoggedIn.vue";


describe("LoggedIn Tests", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(LoggedIn, {});
    });

    it("Should render logged in landing site", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("Should show title", () => {
        expect(wrapper.text()).toContain("Weekly");
    });

    it("Should show completion bar", () => {
        expect(wrapper.find(".fill").exists()).toBe(true);
    });
});