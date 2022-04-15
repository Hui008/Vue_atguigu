// 创建vuex中最为核心的store

import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备actions  用于相应组件中的动作
const actions ={
    /* add(context,value){
        console.log('action中的add被调用了');
        context.commit('ADD',value)
    },
    minus(context,value){
        console.log('action中的minus被调用了');
        context.commit('MINUS',value)
    }, */
    addOdd(context,value){
        console.log('action中的addOdd被调用了');
        if(context.state.sum % 2){
            context.commit('ADDODD',value)
        }
    },
    addWait(context,value) {
        setTimeout(()=>{
            context.commit('ADDWAIT',value)  
        },500)
    }
    
}
// 准备mutation 用于操作数据(state)
const mutations  = {
    add(state,value){
        console.log('mutation中的ADD被调用了');
        state.sum += value
    },
    minus(state,value){
        console.log('mutation中的MINUS被调用了');
        state.sum -= value
    },
    ADDODD(state,value){
        console.log('mutation中的ADDODD被调用了');
        state.sum += value
    },
    ADDWAIT(state,value){
        console.log('mutation中的ADDODD被调用了');
        state.sum += value
    },
}
// 准备state 用于存放数据
const state = {
    sum : 0, // 当前的和
    school:'尚硅谷',
    object:'Vue'
}

const getters ={
    bigSum(state) {
        return state.sum*10
    }
}
// 创建并导出store
export default  new Vuex.Store({
    actions,mutations,state,getters
})



