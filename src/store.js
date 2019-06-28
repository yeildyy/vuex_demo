//store文件中包含了vuex的各种流程
import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'path';
Vue.use(Vuex);
var state={
    count:10
};
const mutations={//处理数据（状态）的变化
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--
    },
    clickOdd(state){
        if(state.count%2==0){
            state.count++  //commit('increment')
        }
    },
    clickAsync(state){//异步操作
        new Promise((resolve)=>{
           setTimeout(function(){
            console.log('1');
        },1000); 
        });       
    }
};
const actions={  //主要处理你要干什么：异步请求、判断、。。
    //传入很多对象
    increment:({
        commit  //这个对象专门用于提交
    })=>{
        //提交的数据都给了mutations
       commit('increment')  //现在开始提交increment，这里的increment可以随便命名

    },
    decrement:({
       commit 
    })=>{
        commit('decrement')
    },
    clickOdd:({
        commit
    })=>{
        commit('clickOdd')
    },
    clickAsync:({commit})=>{
        commit('clickAsync')
    }
};
const getters={
    count(state){
        return state.count;
    }
}
//需要把store对象导出
export default new Vuex.Store({
    state,
    mutations,
    getters, 
    actions  //最终需要将各个变量以及对象全部导出
});