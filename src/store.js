import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";

const HTTP = axios.create({
  baseURL: ""
});

export default new Vuex.Store({
  state: {
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
    }
  },
  actions: {
    refreshSections(context) {
      return new Promise(resolve => {
        HTTP.get("").then(response => {
          context.commit("updateSection", response.data);
          resolve();
        });
      });
    }
  }
});
