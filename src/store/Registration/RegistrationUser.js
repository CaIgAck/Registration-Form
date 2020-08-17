import axios from "axios";
import router from "@/router";

export default {
  state: {
    users: [
      {
        email: null,
        password: null,
        repeatPassword: null
      }
    ]
  },
  getters: {
    getUser: state => {
      return state.users;
    }
  },
  actions: {
    async sendUser(context, payload) {
      if (payload.password === payload.repeatPassword) {
        axios
          .post("http://localhost:3000/user", {
            email: payload.email,
            password: payload.password
          })
          .then(() => {
            context.commit("clearFieldInput");
          });
      }
      await router.push("/roomUser");
    }
  },
  mutations: {
    clearFieldInput(state) {
      state.users.email = null;
      state.users.password = null;
      state.users.repeatPassword = null;
    }
  }
};
