<template>
  <v-card>
    <v-container fluid>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="mt-5">
            <vue-slider
              v-model="valorAplicado"
              :min="5000"
              :max="50000"
              :interval="100"
              color="#1e256d"
              :tooltip="'always'"
              :tooltip-formatter="formatter2"
            ></vue-slider>
            <p  class="inline"> <b> R$5,000 </b></p>
            <p class="pull-right inline" 
            > <b>R$50,000 </b></p>
            <div class="text-center mt-5">
              <v-btn
                class="ma-2"
                outlined
                color="#1e256d"
               
                 @click="parcelas = 6"
                :value="6"
                >6x</v-btn
              >
              <v-btn
                class="ma-2"
                outlined
                color="#1e256d"
                @click="parcelas = 12"
                :value="12"
                >12x</v-btn
              >
              <v-btn class="ma-2" outlined color="#1e256d"  @click="parcelas = 18" value="18"
                >18x</v-btn
              >
              <v-btn class="ma-2" outlined color="#1e256d"  @click="parcelas = 24" value="24"
                >24x</v-btn
              >
            </div>

            <br />
            <p class="calculate-amount text-center mt-5">
              {{ valorFinal | currency }}
            </p>
            <p class="text-center">Por mês <sup> (1) </sup></p>
            <hr class="main-color-text" style="border: 1px solid #1e256d;" />
            <br />
            <small>
              <sup> (1) </sup> Valores calculados utilizando a taxa mínima de
              1,29% a.m. Impostos e taxas adicionais não incluídos.</small
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
    <v-card-actions>
      <v-btn class="m-4 main-color-bg text-white" @click="GetV()">Limpar</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="main-color-bg text-white" @click="Generate()"
        >Próximo</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>

import ApiWallet from "@/services/apiWallet.js";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  components: {
    VueSlider
  },
  data() {
    return {
      percentMonth: 1.29 / 100,
      slider: 5000,
      valorAplicado: 5000,
      parcelas: 6,
      valorFinal: null,
      cf: null,

      formatter2: v => `R$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    };
  },
  watch: {
    // sempre que a pergunta mudar, essa função será executada
    valorAplicado: function(newValorAplicado, oldValorAplicado) {
      console.log(newValorAplicado, oldValorAplicado);
      this.GetV();
    },
    parcelas: function(newValue, oldValue){
        console.log(newValue , oldValue , this.parcelas);
        this.GetV();
    }
  },
  created() {
    this.GetV();
  },
  computed: {
    CalculatePriceFinal() {
      console.log(this.valorAplicado);

      return this.valorAplicado;
    }
  },
  methods: {
    GetV() {
      this.valorFinal =
        (this.valorAplicado * Math.pow(1 + this.percentMonth, this.parcelas)) /
        this.parcelas;
    },
    Generate() {
    
     ApiWallet
      .post("https://l34yykpi8i.execute-api.us-east-1.amazonaws.com/Prod/wallet",{
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8080/',
                'Access-Control-Request-Method': 'GET',
                'Accept':'*'
            }
        })
        .then(res => {
          console.log("response", res);
        })
        .catch(error => console.log("Houve um erro",error));
    }
  }
};
</script>
<style>
.main-color-text {
  color: #1e256d !important;
}
.main-color-bg {
  background: #1e256d !important;
}
.text-white {
  color: white !important;
}
.calculate-amount {
  color: #1e256d;
  background-color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-top: -24px;
}
.checked-button {
  background: #1e256d !important;
}

.pull-right{
    float: right;
}
.inline{
    display: inline-block;
}
</style>
