import request from "../utils/request";

export function getUserList(data) {
  return request({
    method: 'post',
    url: '/api/user/all',
    data,
  })
}

export function getUserById(data) {
  return request({
    method: 'post',
    url: '/api/user/id/' + data.id,
    data,
  })
}