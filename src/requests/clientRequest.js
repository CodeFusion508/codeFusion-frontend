import HTTP from "./http.js";

const request = HTTP("Usuarios", "students");

// Student Requests
export const createUserReq = async ({ name, email, password }) => (await request("POST", `/`, { userName: name, email, password }));

export const getUserReq = async (uuid) => (await request("GET", `/${uuid}`));

export const logInUserReq = async ({ email, password }) => (await request("POST", `/login`, { email, password }));

export const updateUserReq = async (dataUser) => (await request("PUT", `/`, dataUser));


export const createRelation = async (dataRequest) => (await request("POST", `/rel`, dataRequest));


export const confirmAccountReq = async (user) => (await request("POST", "/confirm-account", user));

export const confirmAccountUser = async (token) => (await request("GET", "/confirm-account/" + token));

export const recoveryAccount = async (email) => (await request("POST", "/recovery/account", { email }));


// Google User Requests
const requestGoogle = HTTP("Google", "google");

export const createGoogleUserReq = async ({ name, email, token }) => (await requestGoogle("POST", `/users/signUp`, { userName: name, email, idToken: token }));

export const verifyGUserReq = async (dataRequest) => (await requestGoogle("POST", "/users/logIn", { idToken: dataRequest }));