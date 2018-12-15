import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";

export default new Vuex.Store({
  state: {
    test: "init",
    sections: [
      {
        id: 1,
        title: "Experiments",
        tiles: [
          {
            id: 1,
            title: "a",
            route: "about"
          },
          {
            id: 2,
            title: "b",
            route: "test"
          },
          {
            id: 1,
            title: "a",
            route: "about"
          },
          {
            id: 1,
            title: "a",
            route: "about"
          },
          {
            id: 1,
            title: "a",
            route: "about"
          },
          {
            id: 1,
            title: "a",
            route: "about"
          },
          {
            id: 1,
            title: "a",
            route: "about"
          },
          {
            id: 1,
            title: "a",
            route: "about"
          },
          {
            id: 1,
            title: "a",
            route: "about"
          }
        ]
      },
      {
        id: 2,
        title: "School!",
        tiles: []
      }
    ]
  },
  mutations: {
    updateSections(state, payload) {
      state.sections = payload;
    },
    updateTest(state, payload) {
      state.test = payload;
      console.log(payload);
      console.log(state.test);
    }
  },
  actions: {
    refreshTest(context) {
      return new Promise(resolve => {
        axios
          .get("https://petstore.swagger.io/v2/store/inventory")
          .then(response => {
            console.log(response.data);
            context.commit("updateTest", response.data);
            resolve();
          });
      });
    }
  }
});
