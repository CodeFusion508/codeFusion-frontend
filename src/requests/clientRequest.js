import axios from "axios";

import { useToastStore } from "@/store/toastStore.js";
import { useAuthStore } from "@/store/authStore.js";

const students = "users";

export const getUserReq = async (uuid) => {
    let err;

    const { data } = await axios({
        method  : "get",
        url     : `${import.meta.env.VITE_SERVER}${students}/${uuid}`,
        headers : {
            authorization: `Bearer ${useAuthStore().authToken}`
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Usuarios" });

        throw new Error(err.response.data);
    }

    return data;
};

export const createUserReq = async ({
    name,
    email,
    password
}) => {
    let err;

    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.VITE_SERVER}${students}/`,
        data   : {
            userName: name,
            email,
            password
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Usuarios" });

        //throw new Error(err.response.data);
    }

    return data;
};

export const createGoogleUserReq = async ({
                                        name,
                                        email
                                    }) => {
    let err;

    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.VITE_SERVER}${students}/google`,
        data   : {
            userName: name,
            email
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Usuarios de Google" });

        //throw new Error(err.response.data);
    }

    return data;
};

export const logInUserReq = async ({ email, password }) => {
    let err;

    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.VITE_SERVER}${students}/login`,
        data   : {
            email,
            password
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Usuarios" });

        throw new Error(err.response.data);
    }

    return data;
};

export const updateUserReq = async (dataUser) => {
    let err;

    const { data } = await axios({
        method : "put",
        url    : `${import.meta.env.VITE_SERVER}${students}/`,
        data   : dataUser
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Usuarios" });

        throw new Error(err.response.data);
    }

    return data;
};


export const createRelation = async (dataRequest = {}) => {
    let err;

    const { data } = await axios({
        method  : "post",
        url     : `${import.meta.env.VITE_SERVER}${students}/rel`,
        data    : dataRequest,
        headers : {
            authorization: `Bearer ${useAuthStore().authToken}`
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Archivos" });

        throw new Error(err.response.data);
    }

    return data;
};
export const verifyGUserReq = async (dataRequest = {}) => {
    let err;

    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.VITE_SERVER}gVerify`,
        data   : dataRequest
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Archivos" });

        throw new Error(err.response.data);
    }
    console.log(data, "USER VERIFIED IN CLIENT REQUEST");
    return data;
};