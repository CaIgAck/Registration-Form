<template>
  <div class="home">
    <v-tabs centered>
      <v-tab>
        Registration
      </v-tab>
      <v-tab>
        Log in
      </v-tab>
      <v-tab-item>
        <div><Registration /></div>
      </v-tab-item>
      <v-tab-item>
        <div><LogIn /></div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// @ is an alias to /src

import Registration from "@/components/Registration";
import LogIn from "@/components/LogIn";
export default {
  name: "Home",
  components: { LogIn, Registration }
};
</script>
