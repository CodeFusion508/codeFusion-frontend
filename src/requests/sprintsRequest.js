import axios from "axios";
import { useToastStore } from "@/store/toastStore.js";
import { } from "@/store/moduleStore.js";

const path = "sprints";

export const getAllSprints = async () => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}${path}/`
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Sprints" });

        // throw new Error(err.response.data);
    }
    return data.node;
};

export const getSprintByUuid = async (uuid = "") => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}${path}/${uuid}/rel`
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Sprints" });

        // throw new Error(err.response.data);
    }

    return data;
};