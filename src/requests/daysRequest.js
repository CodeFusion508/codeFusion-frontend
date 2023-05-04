import { Https } from "./Https";

const days = "days";
const https = new Https('Days', days)


export const getDaysRequest = async () => (await https.get('/').Builder()).data

export const getContentsRelationByDays = async (uuid) => {

    const { data } = await https.get(`/${uuid}/rel`).Builder()

    data.node = data.node.sort((valueA, valueB) => {
        const nodeA = valueA.rels.properties.contentNo;
        const nodeB = valueB.rels.properties.contentNo;
        return nodeA - nodeB;
    });

    return data;
};