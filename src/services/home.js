/*
* @Author: leo
* @Date: 2017-12-10 16:55:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-10 16:55:00
*/

// import api from './xhr';
import api from '../api';

/**
 * 首页所用到的http service
 */
class HomeService {
    /**
     * 获取首页主播列表
     * @return {Promise}
     */
    getAnchorList (params) {
        return api({
            method: 'get',
            url: '/home/v4/moreAnchor.h5',
            params: params
        });
    }
}

// 实例化后导出，全局单例
export default new HomeService();
