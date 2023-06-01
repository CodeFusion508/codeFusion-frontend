import{
    describe, it, expect
} from "vitest";
import LoggedIn from "@/modules/HomePage/LoggedIn.vue";
import { mount } from "@vue/test-utils";

const wrapper = mount(LoggedIn, {});
describe("LoggedIn", () => {
    it("should render logged out landing site", () => {
        expect(wrapper.exists()).toBe(true);
    });
});