<template>
  <v-app id="app">
    <v-app-bar app color="#ffffff" dark>
      <img src="@/assets/logo.jpg" alt="Logo" height="80%" />
      <v-toolbar-title class="primary-color">
        | Teste Front end</v-toolbar-title
      >

      <v-toolbar-title
        class="m-l-12 primary-color"
        style="color : black; margin-left: 55px;"
      >
        Olá , :) solicite o seu crédito Rispar :)</v-toolbar-title
      >
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row >
          <v-col cols="12" sm="3">
            <SideBar />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        <strong>Rispar</strong> — {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import SideBar from "@/components/sidebar";
export default {
  name: "Home ",
  components: { SideBar },

  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
<style>
.primary-color {
  color: black;
}
</style>
