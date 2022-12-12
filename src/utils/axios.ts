import axios from "axios";
// import storage from "./storage";

const coreAxios = axios.create({
	baseURL: process.env.REACT_APP_SERVICE_URL,
});

export default coreAxios;

coreAxios.interceptors.request.use(function (req) {
	let token = localStorage.getItem("token");

	if (token) {
		req.headers!.authorization = "Token " + JSON.parse(token);
	}

	return req;
});
