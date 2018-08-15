import {request} from "./request";

export function dlogin(data) {
    return request({
        url: '/dlogin.php',
        method: 'post',
        data
    })
}