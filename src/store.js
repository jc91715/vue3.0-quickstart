import Vue from 'vue'
import Vuex from 'vuex'

import post from './store/modules/post'
import base from './store/base'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        post,
        base
    }
})
