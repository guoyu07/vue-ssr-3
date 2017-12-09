/*
* @Author: leo
* @Date: 2017-12-09 21:50:00
* @Last Modified by: leo
* @Last Modified time: 2017-12-09 21:50:00
* @introduction store 总入口
*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Home from './home';

export default new Vuex.Store({
    modules: {
        Home
    }
});
