import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css";
import axios from "axios";
import Vuelidate from "vuelidate";
import VueCurrencyFilter from 'vue-currency-filter'
import "material-design-icons-iconfont/dist/material-design-icons.css";
Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vuelidate);


Vue.use(VueCurrencyFilter, {
  symbol: 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
});

new Vue({
  router,
  store,
  axios,
  vuetify,
  Vuelidate,
  icons: {
    iconfont: "mdi" // default - only for display purposes
  },

  render: h => h(App)
}).$mount("#app");
