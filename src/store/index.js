import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: {
            name: "",
            photo: ""
        }
    },
    mutations: {
        userSave(state, Obj) {
            // state.userInfo.name = Obj.name;
            // state.userInfo.photo = Obj.photo;
            // window.console.log(Obj);
            state.userInfo = { ...Obj }
            // Object.assign(state.userInfo, Obj)
        }
    }
})

export default store