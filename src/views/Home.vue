<template>
  <v-app>
    <v-app-bar
      app
      color="blue darken-1"
      dark
    >
      叉车换电表单
    </v-app-bar>

    <v-main>
      <UserForm />
    </v-main>
  </v-app>
</template>

<script>
import UserForm from "../components/UserForm.vue";
//import axios from "axios";

export default {
  name: "App",

  components: {
    UserForm,
  },

  methods: {
  },

  data: () => ({
    //
  }),

  mounted() {
  },
};
</script>
