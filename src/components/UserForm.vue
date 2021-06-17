<template>
  <v-form
    v-model="valid"
    ref="form"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="batno"
            label="电池编号"
            required
            readonly
            color="blue darken-1"
            :rules="forkliftRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="dcname"
            label="仓库"
            required
            readonly
            color="blue darken-1"
            :rules="forkliftRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="forkcatname"
            label="叉车类别"
            required
            readonly
            color="blue darken-1"
            :rules="forkliftRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-autocomplete
            v-model="forkliftno"
            :rules="forkliftRules"
            label="叉车编号"
            :items="items"
            required
            color="blue darken-1"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-radio-group
            v-model="inout"
            row
            required
            :rules="inoutRules"
          >
            <v-radio
              label="卸下电池"
              value="off"
              color="blue darken-1"
            ></v-radio>
            <v-radio
              label="装上电池"
              value="on"
              color="blue darken-1"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-btn
            block
            color="blue darken-1"
            class="white--text"
            @click="submit"
          >提交</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    batno: "",
    dc: "",
    cat: "",
    forkliftno: "",
    inout: "",
    items: [],
    forkliftRules: [(v) => !!v || "必须填写此项！"],
    inoutRules: [(v) => !!v || "必须选择一项！"],
    dcname: "",
    forkcatname: "",
    forkcatno: "",
  }),
  methods: {
    getForklift() {
      axios
        .get("/forklifts", {
          params: {
            dc: this.dc,
            cat: this.cat,
          },
        })
        .then((response) => {
          this.dcname = response.data.data[0].dcname;
          this.forkcatname = response.data.data[0].forkcat;
          this.forkcatno = response.data.data[0].forkcatno;
          response.data.data.forEach((forklift) => {
            this.items.push(forklift.number);
          });
        });
    },
    submit() {
      let validation = this.$refs.form.validate();
      if (validation) {
        axios
          .post("/switch", {
            bat: this.batno,
            fork: this.forkliftno,
            dc: this.dc,
            inout: this.inout,
            forkcat: this.forkcatno,
            user: sessionStorage.getItem("id"),
          })
          .then(() =>
            this.$router.push({ name: "Submit", params: { tip: "提交成功" } })
          )
          .catch((error) => {
            this.$router.push({
              name: "Submit",
              params: { tip: error.response.data.msg },
            });
          });
      }
    },
  },
  mounted() {
    this.dc = this.$route.params.dc;
    this.cat = this.$route.params.cat;
    this.batno = this.$route.params.bat;
    this.getForklift();
  },
};
</script>

<style scoped>
</style>
