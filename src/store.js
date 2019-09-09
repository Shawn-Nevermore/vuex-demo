import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 88
    },
    // 必须同步执行
    mutations: {
        increase(state) {
            state.num += 100
        },
        decrease(state) {
            state.num -= 100
        }
    },
    // 可以异步执行
    actions: {
        // 传入context对象，ES6解构赋值
        increment({ commit }) {
            setTimeout(() => {
                commit('increase')
            }, 1000)
        }
    },
    getters: {
        getNum(state) {
            return state.num > 0 ? state.num : 0
        }
    }
})
