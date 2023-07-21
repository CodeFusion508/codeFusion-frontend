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

    it("should render logged out landing site", () => {
        expect(wrapper.exists()).toBe(true);
    });
});