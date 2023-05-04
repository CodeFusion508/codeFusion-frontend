import axios from 'axios'
import { useAuthStore } from '../store/authStore'
import { useToastStore } from "@/store/toastStore.js";

export class Https {

    constructor(nameRequest = "", pathNameRequest = "") {
        this.router = `${import.meta.env.VITE_SERVER}`
        this.data = null
        this.path = ""
        this.method = "GET"
        this.NameRequest = nameRequest
        this.pathNameRequest = pathNameRequest
    }

    get(path = "") {
        this.path = path
        this.method = "GET"
        return this
    }

    post(path = "", body = null) {
        this.path = path;
        this.data = body
        this.method = "POST" 
        return this
    }

    delete(path = "", body = null) {
        this.path = path;
        this.data = body
        this.method = "DELETE" 
        return this
    }

    put(path = "", body = null) {
        this.path = path;
        this.data = body
        this.method = "PUT" 
        return this
    }

    async Builder() {
        try {
            const { data } = await axios({
                method: this.method,
                url: `${this.router}${this.pathNameRequest}${this.path}`,
                data: this.data,
                headers: {
                    authorization: `Bearer ${useAuthStore().authToken}`
                }
            })
            return { data }
        } catch (error) {
            useToastStore().Activated({ text: error.response.data, title: this.NameRequest })
            console.log(error.response.data)
            throw new Error(error.response.data);
        }
    }
}