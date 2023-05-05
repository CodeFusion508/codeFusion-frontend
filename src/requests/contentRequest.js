import { Https } from "./Https";

const https = new Https("Archivos", "static");

export const getMD = async (path) => (await https.get(`/${path}`).Builder()).data;