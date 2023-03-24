import axios from "axios";

export const getUserReq = async (uuid) => {
    const { data } = await axios({
        method : "get",
        url    : `http://${import.meta.env.BACK_SERVER}/users/`,
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
        url    : `http://${import.meta.env.BACK_SERVER}/users/signUp`,
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
    const { data } = await axios({
        method : "post",
        url    : `http://${import.meta.env.BACK_SERVER}/users/logIn`,
        data   : {
            email,
            password
        }
    })
        .then((response) => response)
        .catch((err) => err);

    return data;
};

export const getMD = async (path) => {
    const { data } = await axios({
        method : "get",
        url    : `http://${import.meta.env.BACK_SERVER}/static/${path}`
    })
        .then((response) => response)
        .catch((err) => err);

    return data;
};