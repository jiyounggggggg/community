import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

interface ApiConfig extends AxiosRequestConfig {
    baseURL?: string;
}

export async function axiosRequest(endpoint: string, config: ApiConfig = {}) {
    const { baseURL, ...axiosConfig } = config;
    const url = `${baseURL ?? API_URL}${endpoint}`;

    try {
        const response = await axios({
            url,
            ...axiosConfig,
            headers: {
                'Content-Type': 'application/json',
                ...axiosConfig.headers,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch data');
    }
}