import HTTP from "./http.js";

const request = HTTP("Days", "days");

export const getDaysRequest = async () => (await request("GET", "/"));

export const getContentsRelationByDays = async (uuid) => {
    let data = await request("GET", `/node/relationships/${uuid}`);

    data.node = data.node.sort((valueA, valueB) => {
        const nodeA = valueA.rels.properties.contentNo;
        const nodeB = valueB.rels.properties.contentNo;

        return nodeA - nodeB;
    });

    return data;
};