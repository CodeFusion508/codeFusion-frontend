import { Http } from "./http.js";

const request = new Http("Days", "days");

export const getDaysRequest = async () => (await request.get("/").Builder()).data;

export const getContentsRelationByDays = async (uuid) => {
    const { data } = await request.get(`/${uuid}/rel`).Builder();

    data.node = data.node.sort((valueA, valueB) => {
        const nodeA = valueA.rels.properties.contentNo;
        const nodeB = valueB.rels.properties.contentNo;

        return nodeA - nodeB;
    });

    return data;
};