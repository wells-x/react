import {request} from "./request";

/**
 * @author xiaoqiang
 * @date 2018/8/16
 * @description: 登录
 * @param passport
 * @param password
 * @param yzm
 */
export function dlogin({passport, password, yzm='',} = {}) {
    return request({
        url: '/dlogin.php',
        method: 'post',
        data: {passport, password, yzm}
    })
}