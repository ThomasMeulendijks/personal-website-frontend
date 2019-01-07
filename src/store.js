import Vue from "vue";
import Vuex from "vuex";
import PageService from "./services/pageService.js";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		Categories: [{
			id: 1,
			name:"Loading...",
			Items:[],
		}],
	},
	mutations: {
		updateCategories(state, payload) {
			state.Categories = payload;
		}
	},
	actions: {
		refreshCategories(context) {
			PageService.get("Home")
				.then(response => {
					context.commit("updateCategories", response.Categories);
				});
		}
	}
});
