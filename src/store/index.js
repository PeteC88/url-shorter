import { createStore } from "vuex";
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js'

export default createStore({
namespaced:true,
state(){
    return {
        links:[],
        isMobileMenuOpened: false,
        isErrorPopupOpened: false,
    }
},
actions,
mutations,
getters
});