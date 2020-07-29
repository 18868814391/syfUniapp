import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({  
    state: {  
        login: false,  
		adm:'',
    },  
    mutations: {  
        login(state, provider) {  
            console.log(state)  
            console.log(provider)  
            state.login = true;  
			state.adm = provider.adm;  
        },  
        logout(state) {  
            state.login = false;   
            state.adm = '';  
        }  
    },
	actions:{
		
	}
})
export default store