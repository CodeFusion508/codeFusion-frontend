import { createTestingPinia } from "@pinia/testing";
import {
    describe,
    it,
    expect,
    beforeAll
} from "vitest";
import { fn } from "@vitest/spy";
import { mount } from "@vue/test-utils";

import ToastError from "@/components/ToastError.vue";
import { useToastStore } from "@/store/toastStore.js";


describe("ToastError Tests", () => {
    let wrapper;
    let store;

    beforeAll(() => {
        wrapper = mount(ToastError, {
            global: {
                plugins: [createTestingPinia({ initialState: { ToastError: { title: "Error" } }, createSpy: fn })]
            },
            props: {
                error: "Error"
            }
        });

        store = useToastStore();
        store.title = "Error";
        store.text = "There has been an error.";
        store.layout = true;
    });

    it("Should render error toast", () => {
        expect(wrapper.text()).toContain("Error");
        expect(wrapper.text()).toContain("There has been an error.");
        expect(wrapper.html().toString()).toContain("activated");
    });
});