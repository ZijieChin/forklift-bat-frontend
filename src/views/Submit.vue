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
      <Tip />
    </v-main>
  </v-app>
</template>

<script>
import Tip from "../components/Tip.vue";

export default {
  name: "App",

  components: {
    Tip,
  },

  data: () => ({
  }),

  mounted() {
  },
};
</script>
