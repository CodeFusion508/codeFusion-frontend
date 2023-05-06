import { Http } from "./http.js";

const request = new Http("Archivos", "static");

export const getMD = async (path) => (await request.get(`/${path}`).Builder()).data;