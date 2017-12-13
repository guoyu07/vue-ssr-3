/*
* @Author: leo
* @Date: 2017-12-11 16:55:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-11 16:55:00
*/

const axios = require('axios');
let api;

axios.defaults.timeout = 10000;

axios.interceptors.response.use((res) => {
    if (res.status >= 200 && res.status < 300) {
        return res;
    }
    return Promise.reject(res);
}, (error) => {
    // 网络异常
    return Promise.reject({
        message: '网络异常，请刷新重试',
        err: error
    });
});

if (process.__API__) {
    api = process.__API__;
} else {
    api = {
        get: function (target, params = {}) {
            const suffix = Object.keys(params).map(name => {
                return `${name}=${JSON.stringify(params[name])}`;
            }).join('&');
            const urls = `${target}?${suffix}`;
            return new Promise((resolve, reject) => {
                axios.get(urls, params).then(res => {
                    resolve(res.data);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        post: function (target, options = {}) {
            return new Promise((resolve, reject) => {
                axios.post(target, options).then(res => {
                    resolve(res.data);
                }).catch((error) => {
                    reject(error);
                });
            });
        }
    };
}

module.exports = api;