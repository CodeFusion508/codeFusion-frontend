import { Http } from "./http.js";

const request = new Http("Usuarios", "users");

export const getUserReq = async (uuid) => (await request.get(`/${uuid}`).Builder()).data;

export const createUserReq = async ({
    name,
    email,
    password
}) => (await request.post(``, {
    userName: name,
    email,
    password
}).Builder()).data;

const requestGoogle = new Http("Google", "google");

export const createGoogleUserReq = async ({
    name,
    email,
    token
}) => (await requestGoogle.post(``, {
    userName : name,
    email,
    idToken  : token
}).Builder()).data;

export const logInUserReq = async ({ email, password }) => (await request.post(`/login`, { email, password }).Builder()).data;

export const updateUserReq = async (dataUser) => (await request.put(`/`, dataUser).Builder()).data;

export const createRelation = async (dataRequest) => (await request.post(`/rel`, dataRequest).Builder()).data;

export const verifyGUserReq = async (dataRequest) => (await requestGoogle.post("/ver", { idToken: dataRequest }).Builder()).data;