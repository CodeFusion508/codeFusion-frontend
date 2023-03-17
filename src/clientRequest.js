import axios from "axios";

export const exampleCreateUser = async (uuid) => {
    const param = `${uuid}`;

    const data = await axios({
        method : "get",
        url    : `http://127.0.0.1:8080/users/${param}`
    })
        .then((response) => response.data)
        .catch((err) => err);

    return data.records;
};