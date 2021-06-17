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
      <loading />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import Loading from "../components/Loding.vue";

export default {
  name: "App",

  components: {
    Loading,
  },

  data: () => ({
    id: "",
    token: "",
    //
  }),

  methods: {
    redirect() {
      let code = this.global.getQueryString("code");
      if (!code) {
        let url = this.global.authURL + window.location.href;
        console.log(url);
        window.location.href = url;
      } else {
        axios
          .get("/userauth", {
            params: {
              code: code,
            },
          })
          .then((response) => {
            this.id = response.data.data.id;
            this.token = response.data.data.token;
            sessionStorage.setItem("id", this.id);
            sessionStorage.setItem("token", this.token);
            let url = this.global.getQueryString("to");
            this.$router.push(url);
          })
          .catch(() => {
            this.$router.push({
              name: "Submit",
              params: { tip: "无权访问此页面" },
            });
          });
      }
    },
  },

  mounted() {
    this.redirect();
  },
};
</script>
