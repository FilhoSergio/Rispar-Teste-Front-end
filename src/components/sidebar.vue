<template>
  <v-stepper v-model="teste.id" vertical non-linear @update="teste">
    <v-stepper-step :complete="e6 > 1" step="1" color="#1e256d">
      Cadastro
      <small>Dados iniciais</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      
      <!-- <v-card-actions>
        <v-spacer> </v-spacer>
        <v-btn color="#1e256d" class="text-white" @click="e6 = 2"
          >Próximo</v-btn
        >
      </v-card-actions> -->
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" color="#1e256d"
      >Pedido
      <small> Detalhe do empréstimo </small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <h3 class="headline">Pedido</h3>
      <small> De quanto você precisa ? </small>
      <Pedido />
      <v-card-actions>
        <v-btn class="text-white" color="#1e256d" @click="e6 = 1">Voltar</v-btn>
        <v-spacer> </v-spacer>
        <v-btn class="text-white" color="#1e256d" @click="Generate()"
          >Próximo</v-btn
        >
      </v-card-actions>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3" color="#1e256d"
      >Transferência
      <small> Garantia em Bitcoin </small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <h3 class="headline">Trânsferência</h3>
      <small> Última etapda , tranferência da garantia </small>
      <Transferencia
        :wallet_content="wallet_content"
        :key="wallet_content['.key']"
      />

      <v-btn color="#1e256d" class="text-white mt-5" @click="e6 = 1"
        >voltar</v-btn
      >
    </v-stepper-content>
  </v-stepper>
</template>
<script>
import ApiWallet from "@/services/apiWallet.js";
import Transferencia from "@/components/transferencia";
import Pedido from "@/components/pedido";
export default {
  components: {  Pedido, Transferencia },
  props: {
    teste:{
      type: Object
    }
  },


  data() {
    return {
      e6: 1,
      wallet_content: {}
    };
  },
  methods: {
    Generate() {
      this.e6 = 3;

      ApiWallet.post()
        .then(res => {
          this.wallet_content = res.data;
        })
        .catch(error => {
          this.$swal("Erro ao Solicitar", ".", "error");
          this.e6 = 2;
          console.error(error);
        });
    },
    teste(){
      this.e6 = 1
    }
  }
};
</script>
<style scoped>
.text-white {
  color: white;
}
</style>
