import axios from "axios";

export const getUserReq = async (uuid) => {
    const { data } = await axios({
        method : "get",
        url    : "http://127.0.0.1:8080/users/",
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
        url    : "http://127.0.0.1:8080/users/signUp",
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