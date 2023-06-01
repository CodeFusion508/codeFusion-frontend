import{
    describe, it, expect
} from "vitest";
import LoggedIn from "@/modules/HomePage/LoggedIn.vue";
import { mount } from "@vue/test-utils";

const wrapper = mount(LoggedIn, {});
wrapper.vm.$emit("credential", {message: "I am a credential"});
describe("LoggedIn", () => {
    it("should render google login button", () => {
        expect(wrapper.exists()).toBe(true);
    });
    it("should emit credential to parent",  () => {
        expect(wrapper.emitted().credential).toBeTruthy();
        expect(wrapper.emitted().credential[0]).toEqual([{message: "I am a credential"}]);
    });
});

/*
*****************ATTENTION******************
* Pending tests:
* - check if it emits actual credential using Mocked Service Worker
*/