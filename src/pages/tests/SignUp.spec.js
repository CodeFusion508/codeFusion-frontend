import { createTestingPinia } from "@pinia/testing";
import {
 describe, it, expect, beforeEach, vi
} from "vitest";
import { fn } from "@vitest/spy";
import { mount } from "@vue/test-utils";
import {useAuthStore} from "@/store/user/authStore.js";
import {useUserStore} from "@/store/user/userStore.js";
import SignUp from "../SignUp.vue";

let wrapper;


describe("Logged In", () => {
    beforeEach(() => {
        wrapper = mount(SignUp, {
            global: {
                plugins: [createTestingPinia({createSpy: fn})]
            }
        });
    });
    it("should render both GLoginButton", () => {
        expect(wrapper.findAllComponents({name: "g-login"}).length).toBe(2);
    });
    it("should render passwordProgress component", function () {
        expect(wrapper.findAllComponents({name: "password-progress"}).length).toBe(1);
    });
    it("should create a new mocked user", async () => {
        let userStore = useUserStore();
        let userObj = {
            name     : "test",
            uuid     : "",
            email    : "",
            avatar   : null,
            tkn      : "",
            password : ""
        };
        const spy = vi.spyOn(wrapper.vm, "createAccount").mockImplementation(() => userObj);

        expect(spy).toHaveBeenCalled();
    });
});