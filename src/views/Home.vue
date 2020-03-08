<template>
  <v-app id="app">
    <v-app-bar app color="#1e256d" dark>
      <img src="@/assets/logo_svg.svg" alt="Logo" height="80%" />
      <v-toolbar-title class="primary-color">
        | Teste Front end</v-toolbar-title
      >
      <v-toolbar-title class="m-l-12 primary-color" style=" margin-left: 55px;">
        Olá , solicite o seu crédito Rispar :)</v-toolbar-title
      >
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <SideBar />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        <strong>Rispar</strong> © {{ new Date().getFullYear() }}. Todos os
        direitos reservados.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import SideBar from "@/components/sidebar";

export default {
  name: "home",
  components: { SideBar },
  props: {},
  data: () => ({})
};
</script>
<style>
.primary-color {
  color: white;
}
.pointer {
  cursor: pointer;
}
</style>
