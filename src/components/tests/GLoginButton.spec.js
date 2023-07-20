import {
    describe,
    it,
    expect,
    beforeAll
} from "vitest";
import { mount } from "@vue/test-utils";

import LoggedIn from "@/modules/HomePage/LoggedIn.vue";


describe("Google Button Component Tests", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(LoggedIn, {});
        wrapper.vm.$emit("credential", { message: "I am a credential" });
    });

    it("Should render google login button", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("Should emit credential to parent", () => {
        expect(wrapper.emitted().credential).toBeTruthy();
        expect(wrapper.emitted().credential[0]).toEqual([{ message: "I am a credential" }]);
    });
});

/*
*****************ATTENTION******************
* Pending tests:
* - check if it emits actual credential using Mocked Service Worker
*/