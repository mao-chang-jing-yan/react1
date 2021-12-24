import axios from "axios";
import * as api from "./api"

export const instance = axios.create({
    baseURL: api.baseUrl,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});


export const GET = (url, urlParams) => {
    return instance.get(url, {params: urlParams})
}
export const POST = (url, data, urlParams) => {
    return instance.post(url, data, {params: urlParams})
}
export const PATCH = (url, data, urlParams) => {
    return instance.patch(url, data, {params: urlParams})
}

