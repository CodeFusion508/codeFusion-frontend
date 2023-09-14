// Configurations
import { mount, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import NavBar from "@/components/NavBar.vue";
import NavFooter from "@/components/NavFooter.vue";
import router from "@/router/router.js";

config.global.components["nav-bar"] = NavBar;
config.global.components["nav-footer"] = NavFooter;
config.global.plugins.push(router);

// Test
import {
    describe,
    it,
    expect,
    beforeEach
} from "vitest";

import UserSettings from "@/pages/UserSettings.vue";
import { useUserStore } from "@/store/user/userStore.js";


describe("UserSettings", () => {
    let inputs;
    let userObj;
    let wrapper;

    beforeEach(() => {
        userObj = {
            name     : "manolo",
            uuid     : "qwerty123456",
            email    : "another@email.com",
            avatar   : { image: "", file: null },
            tkn      : "qwerty123456",
            password : "asdasdadadasdasda"
        };
        wrapper = mount(UserSettings, {
            global: {
                plugins: [createTestingPinia()]
            }
        });

        const store = useUserStore();
        store.userObj = userObj;

        inputs = wrapper.findAll("input");
    });

    it ("should render UserSettings component", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("should show inputs", function () {
        expect(inputs.length).toBe(5);
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

    it("should update username", () => {
        inputs[1].setValue("pepe");

        expect(wrapper.vm.userObj.name).toBe("pepe");
    });

    it("should update email", () => {
        inputs[2].setValue("anyother@ooutlook.took");

        expect(wrapper.vm.userObj.email).toBe("anyother@ooutlook.took");
    });

    it("should update password", () => {
        inputs[3].setValue("123456789");

        expect(wrapper.vm.userObj.password).toBe("123456789");
    });
});