import{
    describe, it, expect
} from "vitest";
import AboutUs from "@/pages/AboutUs.vue";
import { mount } from "@vue/test-utils";

const wrapper = mount(AboutUs);

describe("AboutUs", () => {
    it("should render AboutUs view", () => {
        expect(wrapper.exists()).toBe(true);
    });
    it("should make shure the image is loaded from the url", function () {
        expect(wrapper.find("img").attributes("src")).not.toBe("");
        expect(wrapper.find("img").attributes("src")).not.toBe(null);
        expect(wrapper.find("img").attributes("src")).toBe("https://avatars.githubusercontent.com/u/61888719?v=4");
    });
});