<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
          class="grey lighten-5"
          style="height: 100vh;"
        >
          <p class="submit-tip">{{text}}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    text: "",
  }),
  created() {
    this.text = this.$route.params.tip;
  },
};
</script>

<style scoped>
.submit-tip {
  font-size: 2em;
  font-weight: 500;
  color: #495057;
}
</style>
