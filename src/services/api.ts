import axios from "axios";

export function apiService(token: string) {
    return axios.create({
        baseURL: process.env.API_URL,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: token,
        }
    });
}