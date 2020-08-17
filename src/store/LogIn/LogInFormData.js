import axios from "axios";
import router from "@/router";
export default {
  state: {
    user: [
      {
        email: null,
        password: null
      }
    ]
  },
  getters: {
    getUserData(state) {
      return state.user;
    }
  },
  actions: {
    async getUserFormData(context, { email, password }) {
      await axios.get("http://localhost:3000/user").then(res => {
        res.data.forEach(key => {
          if (key.email === email && key.password === password) {
            router.push("/roomUser");
          }
        });
      });
    }
  },
  mutations: {}
};
