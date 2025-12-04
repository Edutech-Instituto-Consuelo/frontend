import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { apiConfig } from "./apiConfig";
import type { IRequest } from "./types";

export const api = {
    get: async <T>({ url, token, config, hiddenToast=false } : IRequest<T>) => {
        try {
            const response = await apiConfig(token).get(url, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    post: async <T>({ url, token, body, config, hiddenToast=false } : IRequest<T>) => {
        try {
            const response = await apiConfig(token).post(url, body, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    put: async <T>({ url, token, body, config, hiddenToast=false } : IRequest<T>) => {
        try {
            const response = await apiConfig(token).put(url, body, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    patch: async <T>({ url, token, body, config, hiddenToast=false } : IRequest<T>) => {
        try {
            const response = await apiConfig(token).patch(url, body, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    delete: async <T>({ url, token, config, hiddenToast=false } : IRequest<T>) => {
        try {
            const response = await apiConfig(token).delete(url, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },
}

export function catchCustom(err: unknown) {
    const error = err as AxiosError<{ data: unknown, message: string }>;
    
    console.log(error);
    toast.error(error.response?.data?.message || error.message);
}