<template>
  <v-app id="app">
    <v-content class="container-color">
      <v-container>
        <v-toolbar app color="white" dark dense>
          <img src="@/assets/logo.jpg" alt="Logo" height="80%" />
          <v-toolbar-title class="primary-color f-12 help-text-color">
            | TESTE FRONTEND
          </v-toolbar-title>
          <v-toolbar-title class="m-l-12 primary-color f-12 ml-55">
            Olá , solicite o seu crédito Rispar :)
          </v-toolbar-title>
        </v-toolbar>

        <v-row>
          <!-- Início dos Steps -->
          <v-col cols="12" sm="4" md="4" class="mt-12">
            <v-stepper v-model="e7" vertical non-linear class="h-100">
              <v-stepper-step :complete="e7 > 1" step="1" color="#457b9b">
                Cadastro
                <small>Dados iniciais</small>
              </v-stepper-step>

              <v-stepper-content step="1" class="text-white">
              </v-stepper-content>

              <v-stepper-step :complete="e7 > 2" step="2" color="#457b9b"
                >Pedido
                <small> Detalhe do empréstimo </small>
              </v-stepper-step>

              <v-stepper-content step="2"> </v-stepper-content>

              <v-stepper-step :complete="e7 > 3" step="3" color="#457b9b"
                >Transferência
                <small> Garantia em Bitcoin </small>
              </v-stepper-step>

              <v-stepper-content step="3"> </v-stepper-content>
            </v-stepper>
          </v-col>
          <!-- Fim dos Steps -->
          <v-col cols="12" sm="8" md="8" v-if="e7 == 1">
            <h3 class="headline mt-12">Cadastro</h3>
            <small> Informe seus dados e vamos criar sua conta </small>
            <Cadastro class="mt-10" />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="text-white btn-dflt" @click="changeToPedido()"
                >Próximo</v-btn
              >
            </v-card-actions>
          </v-col>
          <v-col cols="12" sm="4" md="8" v-if="e7 == 2">
            <h3 class="headline mt-10">Pedido</h3>
            <small> De quanto você precisa ? </small>
            <Pedido class="mt-12" />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="e7 = 1">Voltar</v-btn>
              <v-btn
                class="text-white btn-dflt"
                @click="changeToTransferencia()"
                >Próximo</v-btn
              >
            </v-card-actions>
          </v-col>

          <v-col cols="12" sm="8" md="8" v-if="e7 >= 3">
            <h3 class="headline mt-10 ">Transferência</h3>
            <small> Última etapa , tranferência da garantia </small>
            <Transferencia
              class="mt-12"
              :wallet_content="wallet_content"
              :key="wallet_content['.key']"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <div padless class="container-color">
      <v-col class="text-center" cols="12">
        Rispar {{ new Date().getFullYear() }}
      </v-col>
    </div>
  </v-app>
</template>

<script>
import Transferencia from "@/components/transferencia";
import Cadastro from "@/components/cadastro";
import Pedido from "@/components/pedido";
import ApiWallet from "@/services/apiWallet.js";

export default {
  name: "home",
  components: { Transferencia, Cadastro, Pedido },
  props: {},
  data: () => ({
    e7: 1,
    wallet_content: {}
  }),
  watch: {},
  async mounted() {},
  methods: {
    changeToPedido() {
      this.e7 = 2;
    },
    changeToTransferencia() {
      this.e7 = 3;
      ApiWallet.post()
        .then(res => {
          this.wallet_content = res;
        })
        .catch(error => {
          this.e7 = 2;
          console.error(error);
        });
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
.container-color {
  background: #f8f9fb;
}
.text-white {
  color: white !important;
}
.btn-dflt {
  background: #4990e2 !important;
}
.f-12 {
  font-size: 10px !important;
}
.h-100 {
  height: 748px;
}
.ml-55 {
  margin-left: 55px !important;
}
.help-text-color {
  color: #c2bebd;
}
</style>
