import {request} from "../utils/request";

export function login(data) {
  return request({
    method: 'post',
    url: '/api/login',
    data,
  })
}
export function register(data) {
  return request({
    method: 'post',
    url: '/api/register',
    data,
  })
}