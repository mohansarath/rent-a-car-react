import axios from 'axios';

const BASE_URL = 'localhost:3000/';

axios.interceptors.request.use((config) => {
    const auth = localStorage.getItem('Auth');
    if (auth) {
        // let authToken = 'Bearer ' + userDetails.user_token;
        config.headers['Auth'] = auth;
        // setHeader(config);
        return config;
    }
    else {
        // setHeader(config);
        return config;
    }
});


export function getCall(url, params = null) {
    return axios.get(BASE_URL + url, { params: params });
}

export function putCall(url, body) {
    return axios.put(BASE_URL + url, body);
}

export function postCall(url, body) {
    console.log('hi');
    return axios.post(BASE_URL + url, body);
}

export function deleteCall(url, params = null) {
    return axios.delete(BASE_URL + url, { params: params });
}
