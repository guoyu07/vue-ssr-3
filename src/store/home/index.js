/*
* @Author: leo
* @Date: 2017-12-09 21:50:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-09 21:50:00
* @introduction 首页 store 入口
*/

import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
    settings: {
        view: {
            pageSize: 10
        }
    },
    items: []
}

export default {
    state,
    getters,
    actions,
    mutations
}
