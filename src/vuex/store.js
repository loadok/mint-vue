import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: "呵呵了个哒哒",
        age: 18,
        footer: false
    },
    getters: {

    },
    mutations: {
        show (state,msg) {
            state.name = msg;
            console.log(state.name)
        },
        setFooter (state,val) {
            state.footer = val;
        }
    }
})
export default store
