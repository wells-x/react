import {request} from "./test-request";

export function test() {
    return request({
        url: '/new',
        method: 'post',
        data: {a: 1}
    })
}
