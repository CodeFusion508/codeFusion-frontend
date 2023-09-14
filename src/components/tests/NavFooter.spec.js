// Configurations
import { mount } from "@vue/test-utils";


// Test
import {
    describe,
    it,
    expect,
    beforeAll
} from "vitest";

import NavFooter from "@/components/NavFooter.vue";

describe("NavFooter", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(NavFooter);
    });

    it("Should have links to proper site", () => {
        expect(wrapper.findAll("li").length).toBe(9);
        expect(wrapper.text()).toContain("CodeFusion508");
        expect(wrapper.text()).toContain("Descubre nuestra escuela de desarrollo web");
    });
});