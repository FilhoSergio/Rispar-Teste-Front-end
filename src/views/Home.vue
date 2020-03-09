<template>
  <v-app id="app">
    <v-app-bar app color="white" dark>
      <img src="@/assets/logo.jpg" alt="Logo" height="80%" />
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
          <v-col cols="12" sm="4" md="4">
            <SideBar :data="teste"/>
          </v-col>
          <v-col cols="12" sm="8" md="8">
            <h3 class="headline">Cadastro</h3>
            <small> Informe seus dados e vamos criar sua conta </small>
            <Cadastro />
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
import Cadastro from "@/components/cadastro";

export default {
  name: "home",
  components: { SideBar, Cadastro },
  props: {},
  data: () => ({
    teste: {
      id:1
    }
  }),
  async mounted(){
    try{
      console.log(this.$emit('update', this.teste))
    }catch (error) {
      console.error(error)
    }
  }

};
</script>
<style>
.primary-color {
  color: black;
}
.pointer {
  cursor: pointer;
}
</style>
