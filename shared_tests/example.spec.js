import{
describe, it, expect
} from "vitest";
import HomePage from "./src/pages/HomePage.vue";
import { mount } from "@vue/test-utils";
import {useAuthStore} from "@/store/user/authStore.js";

describe("HomePage", () => {
    it("should render home page", () => {
        const authStore = useAuthStore();
        const wrapper = mount(HomePage, { global: { plugins: [authStore] } });
        expect(HomePage.props.title).toContain("Code");
    });
});