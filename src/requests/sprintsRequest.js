import axios from "axios";
import { useToastStore } from "@/store/toastStore.js";

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
    
    data.node = data.node.map(value => {

        if(value.labels[1] === undefined) {
            value.labels.push('Section_1')
        }
        return value

    }).sort((valueA, valueB) => {

        const numberSectionA = parseInt(valueA.labels[1].split('_')[1])
        const numberSectionB = parseInt(valueB.labels[1].split('_')[1])

        return numberSectionA - numberSectionB

    }).reduce((acumulator, value, index, values) => {
        
        const labelMain = value.labels[1]
        if(acumulator[labelMain] === undefined) {
            acumulator[labelMain] = []
            const valuesTemp = values.filter(valueFilter => {
                const label = valueFilter.labels[1]
                if(label === labelMain) return valueFilter
            })
            acumulator[labelMain] = valuesTemp
        }
        return acumulator

    }, {})

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

    return data
}