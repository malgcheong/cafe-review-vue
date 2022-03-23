import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import data from '@/assets/data'

Vue.use(Vuex);

const storage = {
	menuFetch(){
		return data.menu;
	}
}

export const store = new Vuex.Store({
	state: {
		loginState: {
			login: false,
			updateTime: ''
		},
		menuState: storage.menuFetch(),
	},

	getters: {
		getLoginState(state){
			return state.loginState;
		},
		getMenuState(state){
			return state.menuState;
		}
	},

	mutations: {
		setLoginState(state, payload){
			let today = new Date();   
			state.loginState.login = payload.userID != '' ? true:false;
			state.loginState.updateTime = payload.userID != '' ? today.toLocaleTimeString(): '';
		}
	},

	actions: {
		getUserInfo(context){
			axios.get('http://localhost:3000/home/login').then((Response)=>{
					context.commit('setLoginState', Response.data.userInfo);
			}).catch((Error)=>{
					console.log(Error);
			})
		}
	}
});
