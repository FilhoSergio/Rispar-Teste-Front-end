<template>
  <v-card>
    <v-container fluid>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="mt-5 ">
            <p class="calculate-amount text-center mt-5">
              De quanto você precisa?
            </p>
            <vue-slider
              class="mt-12"
              v-model="valorAplicado"
              :min="5000"
              :max="50000"
              :interval="100"
              color="#1e256d"
              :tooltip="'always'"
              :tooltip-formatter="formatter2"
            ></vue-slider>
            <p class="inline"><b> R$ 5.000,00 </b></p>
            <p class="pull-right inline"><b>R$ 50.000,00 </b></p>
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
              <v-btn
                class="ma-2"
                outlined
                color="#1e256d"
                @click="parcelas = 18"
                value="18"
                >18x</v-btn
              >
              <v-btn
                class="ma-2"
                outlined
                color="#1e256d"
                @click="parcelas = 24"
                value="24"
                >24x</v-btn
              >
            </div>

            <br />
            <p class="calculate-amount text-center mt-5">
              {{ valorFinal | currency }}
            </p>
            <p class="text-center">
              Por mês <sup> (1) </sup> em
              <b class="f-20 main-color-text"> {{ parcelas }} X </b>
            </p>
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
  </v-card>
</template>
<script>
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
    parcelas: function(newValue, oldValue) {
      console.log(newValue, oldValue, this.parcelas);
      this.GetV();
    }
  },
  computed: {
    CalculatePriceFinal() {
      console.log(this.valorAplicado);

      return this.valorAplicado;
    }
  },
  created() {
    this.GetV();
  },
  mounted() {},

  methods: {
    GetV() {
      this.valorFinal =
        (this.valorAplicado * Math.pow(1 + this.percentMonth, this.parcelas)) /
        this.parcelas;
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

.pull-right {
  float: right;
}
.inline {
  display: inline-block;
}
.f-20 {
  font-size: 20px;
}
</style>
