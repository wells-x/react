import request from "../utils/request";

export function getUserList(data) {
  return request({
    method: 'post',
    url: '/api/user/all',
    data,
  })
}