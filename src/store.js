import Vue from "vue";
import Vuex from "vuex";
import PageService from "./services/pageService.js";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		sections: [{
			id: 1,
			name:"Loading...",
			Links:[],
		}],
	},
	mutations: {
		updateSections(state, payload) {
			state.sections = payload;
		}
	},
	actions: {
		refreshSections(context) {
			PageService.get("Home")
				.then(response => {
					context.commit("updateSections", response.Sections);
				});
		}
	}
});
