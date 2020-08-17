import Vue from "vue";
import Vuex from "vuex";
import RegistrationUser from "@/store/Registration/RegistrationUser";
import LogInFormData from "@/store/LogIn/LogInFormData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    RegistrationUser,
    LogInFormData
  }
});
