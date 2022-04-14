// 创建vuex中最为核心的store

import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备actions  用于相应组件中的动作
const actions ={}
// 准备mutation 用于操作数据(state)
const mutation  = {}
// 准备state 用于存放数据
const state = {}

// 创建并导出store
export default  new Vuex.Store({
    actions,mutation,state
})



