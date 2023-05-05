import { Https } from "./Https";

const sprints = "sprints";
const https = new Https("Sprint", sprints);

export const getAllSprints = async () => {

    const { data } = await https.get("/").Builder();

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

export const getSprintByUuid = async (uuid = "") => (await https.get(`/${uuid}/rel`).Builder()).data;