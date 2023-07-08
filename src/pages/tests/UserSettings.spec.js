import { createTestingPinia } from "@pinia/testing";

import{
    describe, it, expect
} from "vitest";
import { fn } from "@vitest/spy";
import UserSettings from "@/pages/UserSettings.vue";
import { mount } from "@vue/test-utils";
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
        plugins: [createTestingPinia({initialState: { UserSettings: { userObj: userObj}} ,createSpy: fn})]
    }
});

const store = useUserStore();
store.userObj = userObj;
describe("UserSettings", () => {
    it("should show user info", () => {
        expect(wrapper.text()).toContain("manolo");
        expect(wrapper.text()).toContain("another@email.com");
    });
});