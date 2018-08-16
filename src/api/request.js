import axios from 'axios';
import qs from 'qs';

const request = axios.create({
    baseURL: '/api/'
});

request.interceptors.request.use((config) => {
    config.data = qs.stringify(config.data);
    // console.log(config);
    return config
});

request.interceptors.response.use((res) => {
    // console.log(res);
    return res
});

export default request;
export {request}
