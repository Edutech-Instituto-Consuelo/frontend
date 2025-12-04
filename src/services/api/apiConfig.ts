import axios from "axios";

export function apiConfig(token: string) {
    const baseURL = import.meta.env.VITE_API_URL;

    const api = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: "Bearer " + token,
        }
    });

    return api;
}
