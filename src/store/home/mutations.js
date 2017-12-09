/*
* @Author: leo
* @Date: 2017-12-09 21:50:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-09 21:50:00
* @introduction 首页 mutations
*/

import * as types from './mutation-types'

export const mutations = {
    [types.SET_ACTIVE_ITEMS] (state, collection) {
        state.items = collection;
    }
}