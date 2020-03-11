<template>
  <v-card>
    <v-container fluid>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <vue-slider
              class="mt-12"
              v-model="valorAplicado"
              :min="5000"
              :max="50000"
              :interval="100"
              color="#457e9b"
              :tooltip="'always'"
              :tooltip-formatter="formatter2"
            ></vue-slider>
            <p class="inline"><b> R$ 5.000,00 </b></p>
            <p class="pull-right inline"><b>R$ 50.000,00 </b></p>

            <br />
            <div class="text-center mt-5">
              <p class="d-inline-block ml-5">
                <b> Valor Líquido </b><br />
                {{ valorAplicado | currency }}
              </p>
              <p class="d-inline-block ml-5">
                <b>Valor do Contrato</b><br />
                {{ valorAplicado | currency }}
              </p>
              <p class="d-inline-block ml-5">
                <b>Valor da Parcela</b> <br />
                {{ valorFinal | currency }}
              </p>
              <p class="d-inline-block ml-5">
                <b>Prazo</b> <br />
                {{ parcelas }} meses
              </p>
            </div>
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
      parcelas: 12,
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
