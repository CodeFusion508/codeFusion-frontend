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

    it("Should render logged out landing site", () => {
        expect(wrapper.exists()).toBe(true);
    });
});