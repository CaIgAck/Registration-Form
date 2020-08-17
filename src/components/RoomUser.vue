<template>
  <div class="d-flex justify-center align-center form">
    <v-card width="500" height="600">
      <v-card-title>Привет, ты авторизовался</v-card-title>
      <v-card-text
        >Я создавал эту форму регистрации для обучения,спасибо за то,что уделили
        мне внимание</v-card-text
      >
      <v-card-actions>А вот вам котик</v-card-actions>
      <v-img
        src="https://s0.rbk.ru/v6_top_pics/media/img/7/65/755540270893657.jpg"
      />
      <v-btn class="mt-3" @click="logout">Выход</v-btn>
    </v-card>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "RoomUser",
  methods: {
    logout() {
      router.push("/");
    }
  }
};
</script>

<style scoped>
.form {
  height: 810px;
}
</style>
