import { Http } from "./http.js";

const request = new Http("Usuarios", "users");

export const getUserReq = async (uuid) => (await request.get(`/${uuid}`).Builder()).data;

export const createUserReq = async ({
    name,
    email,
    password
}) => (await request.post(`/`, {
    userName: name,
    email,
    password
}).Builder()).data;

export const createGoogleUserReq = async ({
    name,
    email,
    token
}) => (await request.post(`/google`, {
    userName: name,
    email,
    token
}).Builder()).data;

export const logInUserReq = async ({ email, password }) => (await request.post(`/`, { email, password }).Builder()).data;

export const updateUserReq = async (dataUser) => (await request.put(`/`, dataUser).Builder()).data;

export const createRelation = async (dataRequest) => (await request.post(`/rel`, dataRequest).Builder()).data;


const requestGoogle = new Http("Archivos", "gVerify");

export const verifyGUserReq = async (dataRequest) => (await requestGoogle.post("", { idtoken: dataRequest }).Builder()).data;