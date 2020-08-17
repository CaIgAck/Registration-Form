<template>
  <form class="d-flex justify-center align-center form">
    <v-card width="300" height="400" hover class="pa-3" dark>
      <v-card-title>Log In</v-card-title>

      <v-text-field
        :counter="30"
        label="E-mail"
        required
        v-model.trim="$v.email.$model"
        @blur="$v.email.$touch()"
        :error-messages="emailErrors"
      ></v-text-field>
      <v-text-field
        :counter="20"
        label="password"
        required
        v-model.trim="password"
        @blur="$v.password.$touch()"
        :error-messages="PasswordMessage"
      ></v-text-field>

      <v-btn class="mr-4" @click="getLoginForm()">submit</v-btn>
    </v-card>
  </form>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "LogIn",

  data() {
    return {
      email: null,
      password: null
    };
  },
  validations: {
    email: {
      required,
      minLength: minLength(8),
      email,
      maxLength: maxLength(30)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20)
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Не валидное поле");
      !this.$v.email.required && errors.push("Поле e-mail обязательно");
      return errors;
    },
    PasswordMessage() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Поле password обязательно");
      return errors;
    }
  },
  methods: {
    getLoginForm() {
      this.$v.$touch();
      if (this.email != null && this.password != null) {
        return this.$store.dispatch("getUserFormData", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style scoped>
.form {
  height: 810px;
}
.error {
  color: red;
}
</style>
