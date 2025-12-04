import type { AxiosRequestConfig } from "axios";

export interface IRequest<T> {
    url: string;
    token: string;
    body?: T;
    config?: AxiosRequestConfig;
    hiddenToast?: boolean;
}