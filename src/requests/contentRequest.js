import HTTP from "./http.js";

const request = HTTP("Archivos", "static");

export const getMD = async (path) => (await request("GET", `/${path}`));