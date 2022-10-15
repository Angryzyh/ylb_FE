import axios from "axios";
axios.defaults.baseURL = 'http://localhost:10002';
axios.defaults.timeout = 10000;

//封装 axios 的get请求
export function httpGet(url,parameter) {
	return axios({
		url: url,
		method: "get",
		params: parameter,
	});
}

// 封装 axios 的post请求
export function httpPost(url, parameter) {
	return axios({
		url: url,
		method: "post",
		data: parameter,
	})
}