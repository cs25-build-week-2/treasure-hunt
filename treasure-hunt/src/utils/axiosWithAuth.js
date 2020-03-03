import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export const axiosWithAuth = () => {
	return axios.create({
		headers: {
			"Content-Type": "application/json",
			Authorization: `Token ${key}`,
		},
		baseURL: "https://lambda-treasure-hunt.herokuapp.com",
	});
};
