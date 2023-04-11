import axios from "axios";
import { useToastStore } from "@/store/toastStore.js";

const days = "days";

export const getDaysRequest = async () => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : ` ${import.meta.env.VITE_SERVER}${days}/`
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Days" });

        // throw new Error(err.response.data);
    }

    return data;
};

export const getContentsRelationByDays = async (uuid) => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : ` ${import.meta.env.VITE_SERVER}${days}/${uuid}/rel`
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Days" });
        //throw new Error(err.response.data);
    }

    data.node = data.node.sort((valueA, valueB) => {
        const nodeA = valueA.rels.properties.contentNo;
        const nodeB = valueB.rels.properties.contentNo;
        return nodeA - nodeB;
    });

    return data;
};