import axios from "axios"
const routerRequest = 'users'

export const getUserReq = async (uuid) => {
    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}${routerRequest}`,
        params : {
            uuid
        }
    })
        .then((response) => response)
        .catch((err) => err);

    return data.records;
};

export const createUserReq = async ({
    name,
    email,
    password
}) => {
    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.BACK_SERVER}${routerRequest}/signUp`,
        data   : {
            userName: name,
            email,
            password
        }
    })
        .then((response) => response)
        .catch((err) => err);

    return data;
};

export const logInUserReq = async ({
    email,
    password
}) => {

    try {
        const { data } = await axios({
            method : "post",
            url    : `${import.meta.env.VITE_SERVER}${routerRequest}/logIn`,
            data   : {
                email,
                password
            }
        })
        return data
    } catch (error) {
        alert('La contraseña y/o usuario son incorrectos')
        throw new Error('La contraseña y/o usuario son incorrectos')
    }
};

export const getMD = async (path) => {
    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}static/${path}`
    })
        .then((response) => response)
        .catch((err) => err);

    return data;
};