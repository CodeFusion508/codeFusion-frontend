import {
    describe,
    it,
    expect,
    beforeEach,
    vi
} from "vitest";
import { fn } from "@vitest/spy";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import { useUserStore } from "@/store/user/userStore.js";
import SignUp from "../SignUp.vue";


describe("SignUp", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SignUp, {
            global: {
                plugins: [createTestingPinia({ createSpy: fn })]
            }
        });
    });

    it("Should render both GLoginButton", () => {
        expect(wrapper.findAllComponents({ name: "g-login" }).length).toBe(2);
    });

    it("Should render passwordProgress component", function () {
        expect(wrapper.findAllComponents({ name: "password-progress" }).length).toBe(1);
    });

    it("Should call create account when new user form submit", async () => {
        let userStore = useUserStore();
        let userObj = {
            name     : "test",
            uuid     : "",
            email    : "",
            avatar   : null,
            tkn      : "",
            password : ""
        };
        userStore.userObj = userObj;

        const spy = vi.spyOn(wrapper.vm, "createAccount").mockImplementation(() => userObj);
        let form = wrapper.findAll("form").at(1);
        await form.trigger("submit.prevent");

        expect(spy).toHaveBeenCalled();
    });
    it("Should call create google account when new user form submit using gbutton", async () => {
        let userStore = useUserStore();
        let userObj = {
            name     : "test",
            uuid     : "",
            email    : "",
            avatar   : null,
            tkn      : "",
            password : ""
        };
        userStore.userObj = userObj;

        const spy_googleAcc = vi.spyOn(wrapper.vm, "createGoogleUser").mockImplementation(() => userObj);
        wrapper.vm.createAccount(true);
        let form = wrapper.findAll("form").at(1);
        await form.trigger("submit.prevent");

        expect(spy_googleAcc).toHaveBeenCalled();
    });
    it("Should call confirmAccountReq when new-user form submit", async () => {
        let userStore = useUserStore();
        let userObj = {
            name     : "test",
            uuid     : "",
            email    : "",
            avatar   : null,
            tkn      : "",
            password : ""
        };
        userStore.userObj = userObj;

        const spy_googleAcc = vi.spyOn(wrapper.vm, "confirmAccountReq").mockImplementation(() => userObj);
        wrapper.vm.createAccount();
        let form = wrapper.findAll("form").at(1);
        await form.trigger("submit.prevent");

        expect(spy_googleAcc).toHaveBeenCalled();
    });
    it("Should call login function when login form submit", async () => {
        let userStore = useUserStore();
        let userObj = {
            name     : "",
            uuid     : "",
            email    : "sup@bro.hommie",
            avatar   : null,
            tkn      : "",
            password : "supbro?"
        };
        userStore.userObj = userObj;

        const spy = vi.spyOn(wrapper.vm, "logInUser").mockImplementation(() => userObj);
        let form = wrapper.findAll("form").at(0);
        await form.trigger("submit.prevent");

        expect(spy).toHaveBeenCalled();
    });
    it("should display correct title the sequel", function () {
        wrapper.vm.show("Pistachos");
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.titleForm).toBe("Pistachos");
            expect(wrapper.html().toString()).toContain("Pistachos");
        });
    });
    it("should call pass recovery function when button pressed", async function () {
        let recoveryAccount = { message: "", layout: true };
        let userStore = useUserStore();
        userStore.recoveryAccount = recoveryAccount;
        wrapper.vm.recoveryAccount = recoveryAccount;

        wrapper.vm.$nextTick(async () => {
            console.log(wrapper.html());
            let spy = vi.spyOn(wrapper.vm, "eventRecoveryAccount").mockImplementation(() => recoveryAccount);
            let btn = wrapper.findAll("button").at(0);
            await btn.trigger("click");
            expect(spy).toHaveBeenCalled();
        });
    });
});