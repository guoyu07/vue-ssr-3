/*
* @Author: leo
* @Date: 2017-12-13 09:36:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-13 09:36:00
*/

import createApi from 'create-api';
import { commonSuccessHandler, commonErrorHandler } from './commonHandler';

var api = ({ method = 'get', url, params = null }) => {
    switch (method) {
        case 'get':
            return createApi.get(url, { params: params })
                .then(commonSuccessHandler)
                .catch(commonErrorHandler);
        case 'post':
            return createApi.post(url, params)
                .then(commonSuccessHandler)
                .catch(commonErrorHandler);
    }
};

export default api;