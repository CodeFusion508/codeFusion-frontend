import axios from "axios";
const routerRequest = "users";

export const getUserReq = async (uuid) => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}${routerRequest}`,
        params : {
            uuid
        }
    }).catch((error) => err = error);

    if (err) {
        throw new Error("Este usuario no existe, revisa la información.");
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
        url    : `${import.meta.env.VITE_SERVER}${routerRequest}/signUp`,
        data   : {
            userName: name,
            email,
            password
        }
    }).catch((error) => err = error);

    if (err) {
        throw new Error("Este correo electrónico ya esta registrado. Inicia la sesión o usa otro correo electrónico");
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
        url    : `${import.meta.env.VITE_SERVER}${routerRequest}/logIn`,
        data   : {
            email,
            password
        }
    }).catch((error) => err = error);

    if (err) {
        throw new Error("La contraseña o el correo electrónico es incorrecto.");
    }

    return data;
};

export const getMD = async (path) => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}static/${path}`
    }).catch((error) => err = error);

    if (err) {
        throw new Error("Este archivo no existe.");
    }

    return data;
};