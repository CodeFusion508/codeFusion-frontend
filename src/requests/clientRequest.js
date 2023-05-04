import { Https } from "./Https";

const https = new Https('Usuarios', 'users')

export const getUserReq = async (uuid) => (await https.get(`/${uuid}`).Builder()).data;

export const createUserReq = async ({
    name,
    email,
    password
}) => (await https.post(`/`, { userName: name, email, password }).Builder()).data;

export const createGoogleUserReq = async ({ 
    name, 
    email, 
    token 
}) => (await https.post(`/google`, { userName: name, email, token }).Builder()).data;

export const logInUserReq = async ({ email, password }) => (await https.post(`/`, { email, password }).Builder()).data;

export const updateUserReq = async (dataUser) => (await https.put(`/`, dataUser).Builder()).data;


export const createRelation = async (dataRequest = {}) =>  (await https.post(`/rel`, dataRequest).Builder()).data;

const httpsVerify = new Https('Archivos', 'gVerify')

export const verifyGUserReq = async (dataRequest = {}) => (await httpsVerify.post('', { idtoken: dataRequest }).Builder()).data;