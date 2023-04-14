import axios from "axios";

import { useToastStore } from "@/store/toastStore.js";

const sprints = "sprints";

export const getAllSprints = async () => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}${sprints}/`
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Sprints" });

        // throw new Error(err.response.data);
    }

    // Sorting and Cleaning our data for our lessonsPage
    data.node = data.node.map(value => {
        if (value.labels[1] === undefined) {
            value.labels.push("Section_1");
        }

        return value;
    }).sort((valueA, valueB) => {
        const numberSectionA = parseInt(valueA.labels[1].split("_")[1]);
        const numberSectionB = parseInt(valueB.labels[1].split("_")[1]);

        return numberSectionA - numberSectionB;

    }).reduce((accumulator, value, _, values) => {
        const [, labelMain] = value.labels;

        if (accumulator[labelMain] === undefined) {
            accumulator[labelMain] = [];

            const valuesTemp = values.filter(valueFilter => {
                const label = valueFilter.labels[1];

                if (label === labelMain) return valueFilter;
            });

            accumulator[labelMain] = valuesTemp;
        }

        return accumulator;
    }, {});

    return data.node;
};

export const getSprintByUuid = async (uuid = "") => {
    let err;

    const { data } = await axios({
        method : "get",
        url    : `${import.meta.env.VITE_SERVER}${sprints}/${uuid}/rel`
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.response.data, title: "Sprints" });

        // throw new Error(err.response.data);
    }

    return data;
};