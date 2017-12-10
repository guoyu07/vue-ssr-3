/*
* @Author: leo
* @Date: 2017-12-10 16:55:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-10 16:55:00
*/

function commonSuccessHandler(res) {
    console.log('commonSuccessHandler' + res.status)
    if (res.status === 200) {
        return res.data;
    } else {
        return {
            errno: -1,
            errmsg: '接口返回有误，请重试'
        };
    }
}

function commonErrorHandler(err) {
    console.log('commonErrorHandler' + err)
    if (err.response) {
        return err.response.data;
    } else {
        return {
            errno: -1,
            errmsg: '接口请求失败，请重试'
        };
    }
}

export { commonSuccessHandler, commonErrorHandler };
