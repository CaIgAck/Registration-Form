<template>
  <form class="d-flex justify-center align-center form">
    <v-card width="300" height="400" hover class="pa-3 " dark>
      <v-card-title>Registration</v-card-title>
      <v-text-field
        :counter="30"
        label="email"
        required
        v-model.trim="email"
        @blur="$v.email.$touch()"
        :error-messages="emailErrors"
      ></v-text-field>
      <v-text-field
        type="password"
        :counter="20"
        label="password"
        required
        v-model="password"
        @blur="$v.password.$touch()"
        :error-messages="PasswordMessage"
      ></v-text-field>
      <v-text-field
        type="password"
        :counter="20"
        label="repeat password"
        required
        v-model="repeatPassword"
        @blur="$v.password.$touch()"
        :error-messages="RepeatPasswordMessage"
      ></v-text-field>
      <v-btn class="mr-4" @click="submitForm">submit</v-btn>
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
  name: "Registration",
  data() {
    return {
      email: null,
      password: null,
      repeatPassword: null
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
    },
    RepeatPasswordMessage() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Поле password обязательно");
      return errors;
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (
        this.email != null &&
        this.password != null &&
        this.repeatPassword != null
      ) {
        if (this.password === this.repeatPassword) {
          this.$store.dispatch("sendUser", {
            email: this.email,
            password: this.password,
            repeatPassword: this.repeatPassword
          });
        }
      }
    }
  }
};
</script>

<style scoped>
.form {
  height: 810px;
}
</style>
