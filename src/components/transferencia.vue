<template>
  <v-card>
    <v-container>
      <p class="text-center title">Valor da Garantia</p>

      <div class="text-center">
        <img height="60px" src="../assets/bitcoin.png" alt="Logo" />

        <p class="calculate-amount text-center mt-5">
          {{ wallet_content.btc }}
        </p>
      </div>

      <div class="text-center">
        <p class="text-center title">Endereço da Carteira</p>
        <qrcode-vue
          :value="search_wallet + wallet_content.wallet"
          :size="size"
          level="H"
        ></qrcode-vue>
      </div>

      <v-text-field
        class="pointer mt-8"
        readonly
        outlined
        v-model="wallet_content.wallet"
        label="Copiar Link"
        append-icon="filter_none"
        v-clipboard="wallet_content.wallet"
        @success="handleSuccess"
        @error="handleError"
      ></v-text-field>
    </v-container>
  </v-card>
</template>
<script>
import { clipboard } from "vue-clipboards";
import QrcodeVue from "qrcode.vue";
export default {
  directives: { clipboard },
  components: {
    QrcodeVue
  },
  name: "Transferencia",
  props: {
    wallet_content: {
      type: Object
    }
  },
  data: () => ({
    size: 180,
    search_wallet: "",

  }),
  created() {
    this.search_wallet = process.env.VUE_APP_LOCALBIT;
  },
  computed: {},

  methods: {
    handleSuccess() {
      this.$swal(
        "Link Copiado!",
        "Copiado para área de trasnferência.",
        "success"
      );
    },
    handleError() {
      this.$swal("Erro ao Copiar Link!", ".", "error");
    }
  }
};
</script>
<style>
.pull-right {
  float: right;
}
.main-color-text {
  color: #1e256d;
}
.main-color-bg {
  background: #1e256d;
}
.calculate-amount {
  color: #1e256d;
  background-color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-top: -24px;
}
</style>
