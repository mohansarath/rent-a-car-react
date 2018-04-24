import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

axios.interceptors.request.use((config) => {
    const auth = localStorage.getItem('Auth');
    if (auth) {
        config.headers['x-auth'] = auth;
        return config;
    }
    else {
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
