import HTTP from "./http.js";

const request = HTTP("Sprint", "sprints");


export const getAllSprints = async () => {
    let data = await request("GET", "/");

    // Sorting and cleaning data
    data.node = data.node
        .sort((nodeA, nodeB) => {
            const sprintNoA = nodeA.sprintNo;
            const sprintNoB = nodeB.sprintNo;

            return sprintNoA - sprintNoB;
        })
        .reduce((accumulator, value) => {
            const { sprintNo } = value;

            if (!accumulator[sprintNo]) {
                accumulator[sprintNo] = [];
            }

            accumulator[sprintNo].push(value);

            return accumulator;
        }, {});

    return data.node;
};

export const getSprintByUuid = async (uuid) => (await request("GET", `/node/relationships/${uuid}`));