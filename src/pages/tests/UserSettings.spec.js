import { createTestingPinia } from "@pinia/testing";

import{
    describe, it, expect
} from "vitest";
import { fn } from "@vitest/spy";
import UserSettings from "@/pages/UserSettings.vue";
import {mount} from "@vue/test-utils";
import {useUserStore} from "@/store/user/userStore.js";

let userObj = {
    name     : "manolo",
    uuid     : "qwerty123456",
    email    : "another@email.com",
    avatar   : { image: "", file: null },
    tkn      : "qwerty123456",
    password : "asdasdadadasdasda"
};

const wrapper = mount(UserSettings, {
    global: {
        plugins: [createTestingPinia({createSpy: fn})]
    }
});

const store = useUserStore();
store.userObj = userObj;
describe("UserSettings", () => {
    let inputs = wrapper.findAll("input");
    it("should show inputs", function () {
        expect(inputs.length).toBe(4);
    });
    it("should show user' name", () => {
        expect(inputs[1].element.value).toBe("manolo");
    });
    it("should show user' email", () => {
        expect(inputs[2].element.value).toBe(userObj.email);
    });
    it("should show user' password", () => {
        expect(inputs[3].element.value).toBe(userObj.password);
    });
    it("should update username",  () => {
        inputs[1].setValue("pepe");
        expect(wrapper.vm.userObj.name).toBe("pepe");
    });
    it("should update email",  () => {
        inputs[2].setValue("anyother@ooutlook.took");
        expect(wrapper.vm.userObj.email).toBe("anyother@ooutlook.took");
    });
    it("should update password",  () => {
        inputs[3].setValue("123456789");
        expect(wrapper.vm.userObj.password).toBe("123456789");
    });
});