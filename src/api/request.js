import axios from 'axios';

const request = axios.create({
    baseURL:'/api/'
});

request.interceptors.request.use((config) => {
    console.log(config);
    return config
});

request.interceptors.response.use((res) => {
    console.log(res);
    return res
});

export default request;
export {request}