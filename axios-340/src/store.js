import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./router";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;

      if (state.idToken)
        router.replace("/dashboard");

    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;

    }
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    },

    logout({ commit }) {
      commit("clearAuthData");
      //logout and redirect
      router.replace("/signin");
    },

    signUp({ commit, dispatch }, formData) {
      axios.post("/accounts:signUp?key=AIzaSyChL4aGQFoZt2h0DgukTNqFVfsaq7gSroQ", {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch("storeUser", formData);
          dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(err => console.log(err));
    },

    signIn({ commit, dispatch }, formData) {
      axios.post("/accounts:signInWithPassword?key=AIzaSyChL4aGQFoZt2h0DgukTNqFVfsaq7gSroQ", {

        //we take up not all the data, but only that will be necessary
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(err => console.log(err));
    },

    storeUser({ commit, state }, userData) {
      if (!state.idToken)
        return;


      globalAxios.post("/user.json" + "?auth=" + state.idToken, userData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },

    fetchUser({ commit, state }) {
      globalAxios.get("/user.json" + "?auth=" + state.idToken)
        .then(res => {
          const data = res.data;
          const users = [];
          for (let key in data) {
            if (data.hasOwnProperty(key)) {
              const user = data[key];
              user.id = key;
              users.push(user);
            }
          }
          console.log(users);
          commit("storeUser", users[0]);
        })
        .catch(err => console.log(err));
    }

  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});
