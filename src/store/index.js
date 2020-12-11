import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogBreed: null,
    dogImg: "https://images.dog.ceo/breeds/affenpinscher/n02110627_11614.jpg"
  },
  getters: {
    getDogBreedList(state) {
      return state.dogBreed;
    },
    getDogImage(state) {
      return state.dogImg;
    }
  },
  mutations: {
    DOGS_BREED(state, payload) {
      state.dogBreed = payload;
    },
    DOG_IMAGE(state, payload) {
      state.dogImg = payload;
    }
  },
  actions: {
    async dogsFetchAction(context) {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();
        console.log(data);
        context.commit("DOGS_BREED", Object.keys(data.message));
      } catch (err) {
        console.log("apple", err);
      }
    },
    async dogsImageFetchAction(context, selectedBreed) {
      try {
        const res = await fetch(
          `https://dog.ceo/api/breed/${selectedBreed}/images/random`
        );
        const data = await res.json();
        console.log(data);
        context.commit("DOG_IMAGE", data.message);
      } catch (err) {
        console.log("apple", err);
      }
    }
  },
  modules: {}
});
