import axios from "axios";

import { useAuthStore } from "@/store/user/authStore.js";
import { useToastStore } from "@/store/toastStore.js";

const HTTP = (title, path) => async (type, subPath, body = null) => {
    const route = `${import.meta.env.VITE_SERVER}`;

    try {
        const { data } = await axios({
            method  : type,
            url     : `${route}${path}${subPath}`,
            data    : body,
            headers : {
                authorization: `${useAuthStore().authToken}`
            }
        });

        return data;
    } catch (error) {
        useToastStore().activate({ text: error.response.data, title });

        throw new Error(error.response.data);
    }
};

export default HTTP;