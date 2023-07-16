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
        const authStore = useAuthStore();
        const userStore = useUserStore();
        let userObj = {
            name     : "Ask",
            uuid     : "asdasdasa",
            email    : "asd@asd/com",
            avatar   : "",
            tkn      : "",
            password : "asd"
        };
        authStore.authToken = "dasdasd";
        userStore.userObj = userObj;
        const createUser = fn();
        const createUserReq = fn();
        const createUserMock = fn();
        const createUserReqMock = fn();
        createUserReqMock.mockResolvedValue({
            data: {
                node: userStore.userObj
            },
            token: authStore.authToken
        });
        createUser.mockResolvedValue(createUserReqMock);
        createUserReq.mockReturnValue(createUserReqMock);
        await createUser(userStore.userObj).then((data) => {
            console.log(data.mockResolvedValue( userObj ), "data");
        });
        //console.log(wrapper.findAll("button").at(1),  "button 2");
        await wrapper.findAll("button").at(1).trigger("click");
        expect(createUserReqMock).toHaveBeenCalled();
        expect(createUserReqMock).toHaveBeenCalledWith({
            name     : "Ask",
            email    : "asd@asd/com",
            password : "asd"
        });
    });
});