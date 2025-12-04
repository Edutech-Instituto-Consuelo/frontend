import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { apiConfig } from "./apiConfig";
import type { IRequest, IRequestBody } from "./types";

export const api = {
    get: async ({ url, config, hiddenToast=false } : IRequest) => {
        try {
            const response = await apiConfig().get(url, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    post: async <T>({ url, body, config, hiddenToast=false } : IRequestBody<T>) => {
        try {
            const response = await apiConfig().post(url, body, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    put: async <T>({ url, body, config, hiddenToast=false } : IRequestBody<T>) => {
        try {
            const response = await apiConfig().put(url, body, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    patch: async <T>({ url, body, config, hiddenToast=false } : IRequestBody<T>) => {
        try {
            const response = await apiConfig().patch(url, body, config);

            !hiddenToast && toast.success(response.data?.message || response.statusText);
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    delete: async ({ url, config, hiddenToast=false } : IRequest) => {
        try {
            const response = await apiConfig().delete(url, config);

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