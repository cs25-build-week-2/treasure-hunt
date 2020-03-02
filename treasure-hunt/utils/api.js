import axios from "axios";

import { loadState } from "./local_storage";

const development = "http://localhost:8000/";
const production = "https://cs25mudbuildweek.herokuapp.com/";

export const client = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? production : development,
	header: {
		"Content-Type": "application/json",
	},
});

export const clientWithAuth = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? production : development,
});
clientWithAuth.interceptors.request.use(
	config => {
		const state = loadState("auth");
		const token = state.accessToken;
		if (token) {
			config.headers["Authorization"] = "Bearer " + token;
		}
		config.headers["Content-type"] = "application/json";

		return config;
	},
	error => {
		Promise.reject(error);
	}
);
