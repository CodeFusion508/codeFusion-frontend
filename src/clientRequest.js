import axios from "axios";
import { storeToast } from './store/toastStore'
import { useAuthStore } from './store/authStore'

const students = "users";
const titleError = "Error Usuarios"

export const getUserReq = async (uuid) => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}${students}/`,
        headers: {
            authorization:`Bearer ${useAuthStore().authToken}` 
        }
    })
        .catch((error) => err = error);

    if (err) {
        storeToast().Activeted({ text: err.message, title: titleError, time: 5000 })
        throw new Error(err.message);
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
        url    : `${import.meta.env.VITE_SERVER}${students}/signUp`,
        data   : {
            userName: name,
            email,
            password
        }
    })
        .catch((error) => err = error);

    if (err) {
        storeToast().Activeted({ text: err.message, title: titleError })
        throw new Error(err.message);
    }

    return data;
};

export const logInUserReq = async ({
    email,
    password
}) => {
    let err;

    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.VITE_SERVER}${students}/logIn`,
        data   : {
            email,
            password
        }
    })
        .catch((error) => err = error);

    if (err) {
        storeToast().Activeted({ text: err.message, title: titleError })
        throw new Error(err.message);
    }

    return data;
};

export const getMD = async (path) => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}static/${path}`
    })
        .catch((error) => err = error);

    if (err) {
        throw new Error(err.message);
    }

    return data;
};

export const updateUser = async (dataUser) => {
    let err;

    const { data } = await axios({
        method : "put",
        url    : `${import.meta.env.VITE_SERVER}${students}/updateUser`,
        data   : dataUser
    })
        .catch((error) => err = error);

    if (err) {
        storeToast().Activeted({ text: err.message, title: titleError })
        throw new Error(err.message);
    }

    return data;
};