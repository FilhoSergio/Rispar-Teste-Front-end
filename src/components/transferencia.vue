<template>
  <div>
    <v-card>
      <v-card-text>
        <p class="text-center title">Valor da Garantia</p>

        <div class="text-center">
          <img height="60px" src="../assets/bitcoin.png" alt="Logo" />

          <p class="calculate-amount primary-color-text text-center mt-5">
            {{ wallet_content.data.btc }}
          </p>
        </div>
      </v-card-text>
    </v-card>
    <br />
    <v-card>
      <v-card-text>
        <div class="text-center">
          <p class="text-center title">Endereço da Carteira</p>
          <qrcode-vue
            :value="search_wallet + wallet_content.data.wallet"
            :size="size"
            level="H"
          ></qrcode-vue>
        </div>
        <v-col md="6" offset-md="3">
          <v-text-field
            class="pointer mt-8 text-center "
            readonly
            disabled
            filled
            dense
            outlined
            v-model="wallet_content.data.wallet"
            label=""
            append-icon="filter_none"
            v-clipboard="wallet_content.data.wallet"
            @success="handleSuccess"
            @error="handleError"
          ></v-text-field>
        </v-col>
        <v-col cols="2" offset-md="2"> </v-col>
      </v-card-text>
    </v-card>
  </div>
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
      type: Array
    }
  },
  data: () => ({
    size: 180,
    search_wallet: process.env.VUE_APP_LOCALBIT
  }),
  created() {},
  computed: {},

  methods: {
    handleSuccess(e) {
      console.log(e);
      this.$swal(
        "Link Copiado!",
        "Copiado para área de trasnferência.",
        "success"
      );
    },
    handleError(e) {
      console.log(e);
      this.$swal("Erro ao Copiar Link!", ".", "error");
    }
  }
};
</script>
<style scoped>
.pull-right {
  float: right;
}
.primary-color-text {
  color: black;
}

.calculate-amount {
  font-size: 28px;
  font-weight: 700;
  margin-top: -24px;
}
.card-padding {
  padding: 15px;
}
</style>
