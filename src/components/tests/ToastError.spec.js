import { createTestingPinia } from "@pinia/testing";

import{
    describe, it, expect
} from "vitest";
import { fn } from "@vitest/spy";
import ToastError from "@/components/ToastError.vue";
import { mount } from "@vue/test-utils";
import {useToastStore} from "@/store/toastStore.js";

const wrapper = mount(ToastError, {
    global: {
        plugins: [createTestingPinia({initialState: { ToastError: {title: "Error"}} ,createSpy: fn})]
    },
    props: {
        error: "Error"
    }
});
const store = useToastStore();
store.title = "Error";
store.text = "There has been an error.";
store.layout = true;

describe("ToastError", () => {
    it("should render error toast", () => {
        expect(wrapper.text()).toContain("Error");
        expect(wrapper.text()).toContain("There has been an error.");
        expect(wrapper.html().toString()).toContain("activated");
    });
});