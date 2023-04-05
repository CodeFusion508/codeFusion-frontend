import axios from "axios";
import { useToastStore } from "../store/toastStore.js";
//import {useAuthStore} from "../../store/authStore.js"

const days = "days";

export const getDaysRequest = async () => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : ` ${import.meta.env.VITE_SERVER}${days}/`,
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.message, title: "Days" });
        throw new Error(err.message);
    }

    return data;
};

export const getContentsRelationByDays = async (uuid) => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : ` ${import.meta.env.VITE_SERVER}${days}/${uuid}/rel`,
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.message, title: "Days" });
        console.log(err);
        throw new Error(err.message);
    }

    return data;
}

export const getMD = async (path) => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}static/${path}`
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.message, title: "Archivos" });

        throw new Error(err.message);
    }

    return data;
};