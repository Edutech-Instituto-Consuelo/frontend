import type { AxiosRequestConfig } from "axios";

export interface IRequest{
    url: string;
    token: string;
    config?: AxiosRequestConfig;
    hiddenToast?: boolean;
}

export interface IRequestBody<T> {
    url: string;
    token: string;
    body?: T;
    config?: AxiosRequestConfig;
    hiddenToast?: boolean;
}