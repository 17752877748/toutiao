import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: {
            name: "",
            photo: "",
            // token: "1111"
        }
    },
    mutations: {
        userSave(state, Obj) {
            // state.userInfo.name = Obj.name;
            // state.userInfo.photo = Obj.photo;
            // if (Obj.token)
            // state.userInfo.token = Obj.token;
            // window.console.log(Obj);
            // state.userInfo = { ...Obj }
            Object.assign(state.userInfo, Obj)
        }
    }
})

export default store