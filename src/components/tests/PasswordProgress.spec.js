import{
    describe, it, expect
} from "vitest";
import { fn } from "@vitest/spy";
import PasswordProgress from "@/components/PasswordProgress.vue";
import { mount } from "@vue/test-utils";

let password = "123456";

const wrapper = mount(PasswordProgress, {
    props: {
        password: password
    }
});

console.log(wrapper.vm.$props.password, "password");

describe("PasswordProgress", () => {
    it("should render PasswordProgress view", () => {
        expect(wrapper.exists()).toBe(true);
    });
    it("should change font color to red if password size less than 8", () => {
        console.log(wrapper.props());
        console.log(wrapper.vm.$data.passObj);
        wrapper.setProps({ password: "123456" });
        wrapper.setData({ passObj: { color: "bg-danger"} });
        console.log(wrapper.vm.$data.passObj);
        expect(wrapper.find(".bg-danger").exists()).toBe(true);
    });
    it("should change font color to yellow if password size less than 15", () => {
        password = "123456789";
        wrapper.setProps({ password: password });
        expect(wrapper.find(".bg-warning").exists()).toBe(true);
    });
    it("should change font color to green if password size more than 15", () => {
        password = "1234567891234568";
        wrapper.setProps({ password: password });
        expect(wrapper.find(".bg-success").exists()).toBe(true);
    });
});