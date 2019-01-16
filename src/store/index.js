import Vue from 'vue'
import Vuex from 'vuex'

import mymodule from '@/store/modules/mymodule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mymodule
  }
})
