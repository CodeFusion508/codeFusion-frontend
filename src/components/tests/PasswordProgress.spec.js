import {
    describe,
    it,
    expect,
    beforeEach
} from "vitest";
import { mount } from "@vue/test-utils";

import PasswordProgress from "@/components/PasswordProgress.vue";


describe("PasswordProgress Font Colors Tests", () => {
    let wrapper;
    let password;

    beforeEach(() => {
        password = "123456";

        wrapper = mount(PasswordProgress, {
            props: {
                password: password
            }
        });
    });

    it("should render PasswordProgress view", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("should change font color to red if passObj.color is bg-danger", () => {
        wrapper.setData({ passObj: { color: "bg-danger" } });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.find(".bg-danger").exists()).toBe(true);
        });
    });

    it("should change font color to yellow if passObj.color is bg-warning", () => {
        password = "123456789";
        wrapper.setData({ passObj: { color: "bg-warning" } });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.find(".bg-warning").exists()).toBe(true);
        });
    });

    it("should change font color to green if passObj.color is bg-success", () => {
        password = "1234567891234568";
        wrapper.setData({ passObj: { color: "bg-success" } });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.find(".bg-success").exists()).toBe(true);
        });
    });
});

describe("PasswordProgress Password Length Tests", () => {
    let wrapper;
    let password;

    beforeEach(() => {
        password = "123456";

        wrapper = mount(PasswordProgress, {
            props: {
                password: password
            }
        });
    });

    it("should change passObj.color to bg-danger if password length is less than 8", () => {
        password = "123456";
        wrapper = mount(PasswordProgress, {
            props: {
                password: password
            }
        });

        wrapper.vm.checkPassword();

        expect(wrapper.vm.passObj.color).toBe("bg-danger");
    });

    it("should change passObj.color to bg-warning if password length is less than 16", () => {
        password = "123456789";
        wrapper = mount(PasswordProgress, {
            props: {
                password: password
            }
        });

        wrapper.vm.checkPassword();

        expect(wrapper.vm.passObj.color).toBe("bg-warning");
    });

    it("should change passObj.color to bg-success if password length is more than 16", () => {
        password = "1234567891234568";
        wrapper = mount(PasswordProgress, {
            props: {
                password: password
            }
        });

        wrapper.vm.checkPassword();

        expect(wrapper.vm.passObj.color).toBe("bg-success");
    });
});