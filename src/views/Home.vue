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
          <v-col cols="12" sm="3" md="4">
            <SideBar />
          </v-col>
          <!-- <v-col cols="12" sm="8" md="8">
          <h3 class="headline">Cadastro</h3>
          <small> Informe seus dados e vamos criar sua conta </small>
          <Cadastro />
        </v-col> -->
          <v-col cols="12" sm="8" md="8">
            <h3 class="headline">Pedido</h3>
            <small> De quanto você precisa ? </small>
            <Pedido />
          </v-col>
          <!-- <v-col cols="12" sm="8" md="8">
          <h3 class="headline">Trânsferência</h3>
          <small> Última etapda , tranferência da garantia </small>
       
        </v-col> -->
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
// import Cadastro from "@/components/cadastro";
import Pedido from "@/components/pedido";
export default {
  name: "Home ",
  components: { SideBar, Pedido },
  // components: { SideBar, Cadastro},

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
  color: white;
}
</style>
