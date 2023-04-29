import axios, { AxiosInstance, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "https://localhost:7175",
});

api.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: any) => {
		if (401 === error.response.status) {
			window.location.href = "/";
		} else {
			return Promise.reject(error);
		}
	}
);

export { api };
