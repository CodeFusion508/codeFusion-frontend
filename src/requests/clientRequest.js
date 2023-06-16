import HTTP from "./request.js";

const request = HTTP("Usuarios", "students");

// Student Requests
export const createUserReq = async ({ name, email, password }) => (await request("POST", `/`, { userName: name, email, password })).data;

export const getUserReq = async (uuid) => (await request("GET", `/${uuid}`)).data;

export const logInUserReq = async ({ email, password }) => (await request("POST", `/login`, { email, password })).data;

export const updateUserReq = async (dataUser) => (await request("PUT", `/`, dataUser)).data;

export const createRelation = async (dataRequest) => (await request("POST", `/rel`, dataRequest)).data;




export const confirmAccountReq = async (user) => (await request("POST", "/confirm-account", user)).data;

export const confirmAccountUser = async (token) => (await request("we", "/confirm-account-token/" + token)).data;

export const recoveryAccount = async (email) => (await request("/recovery/account", { email })).data;

// Google User Requests
const requestGoogle = HTTP("Google", "google");

export const createGoogleUserReq = async ({ name, email, token }) => (await requestGoogle("POST", ``, { userName: name, email, idToken: token })).data;

export const verifyGUserReq = async (dataRequest) => (await requestGoogle("POST", "/ver", { idToken: dataRequest })).data;





export const confirmAccountUser = async (token) => (await request.get("/confirm-account-token/" + token).Builder()).data;

export const recoveryAccount = async (email) => (await request.post("/recovery/account", { email }).Builder()).data;