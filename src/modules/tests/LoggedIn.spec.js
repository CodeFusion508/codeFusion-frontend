import{
    describe, it, expect
} from "vitest";
import LoggedIn from "@/modules/HomePage/LoggedIn.vue";
import { mount } from "@vue/test-utils";

const wrapper = mount(LoggedIn, {});
describe("LoggedIn", () => {
    it("should render logged in landing site", () => {
        expect(wrapper.exists()).toBe(true);
    });
    it("should show title",  () => {
        expect(wrapper.text()).toContain("Weekly");
    });
    it("should show completion bar",  () => {
        expect(wrapper.find(".fill").exists()).toBe(true);
    });
});