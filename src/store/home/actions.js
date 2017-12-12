/*
* @Author: leo
* @Date: 2017-12-09 21:50:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-09 21:50:00
* @introduction 首页 actions
*/

import { HomeService } from 'services';

export const actions = {
    LOAD_ACTIVE_ITEMS(context) {
        const {commit} = context;

        HomeService.getAnchorList({ index: 0, size: 12, type: 0 }).then(function (response) {
            let collection = response.message.anchors;
            
            commit('SET_ACTIVE_ITEMS', collection);
        });
    }
}