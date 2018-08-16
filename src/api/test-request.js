import axios from 'axios';
// import qs from 'qs';

const request = axios.create({
    baseURL: '/test/',
    // withCredentials: true
});

request.interceptors.request.use((config) => {
    // config.data = qs.stringify(config.data);
    config.headers.post['Content-Type'] = 'application/json';
    // config.headers.cookie = 'csrfToken=ftzU7rNUpvknx_d80XjtC5a7';
    console.log(config);
    return config
});

request.interceptors.response.use((res) => {
    // console.log(res);
    return res
});

export default request;
export {request}
