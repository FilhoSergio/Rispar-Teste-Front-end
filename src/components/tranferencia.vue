<template>
  <v-card>
    <v-container>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="100"
          label="Nome"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>

        <v-radio-group :v-model="row" row>
          <v-radio
            label="Masculino"
            color="secondary"
            value="radio-1"
          ></v-radio>
          <v-radio
            label="Feminino"
            color="secondary"
            :value="radio - 2"
          ></v-radio>
        </v-radio-group>

        <v-col cols="12" sm="6" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateInicialFormatted"
                label="Data de Nascimento"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              locale="pt-br"
              v-model="dateInicial"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <!-- <div>
          <v-btn color="primary pull-right" @click="submit" >Próximo</v-btn>
        </div> -->
        <v-card-actions>
          <v-btn class="m-4 main-color-bg" @click="clear" >Limpar</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="main-color-bg" @click="submit">Próximo</v-btn>
        </v-card-actions>

        <!-- <v-btn class="m-4" @click="clear" color="primary">clear</v-btn> -->
      </form>
    </v-container>
   
   
  </v-card>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(100) },
    email: { required, email },
    select: { required }
  },

  data: () => ({
    name: "",
    email: "",
    checkbox: false,
    form_data: {},
    column: null,
    row: null,
    date: new Date().toISOString().substr(0, 10),
    dateInicial: null,
    menu: false,
    modal: false,
    menu2: false,
    red: true
  }),

  computed: {
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("O Nome deve ter no máximo 100 caracteres");
      !this.$v.name.required && errors.push("O Nome é obrigatório.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Insira um E-mail válido");
      !this.$v.email.required && errors.push("O E-mail é obrigatório");
      return errors;
    },
    dateInicialFormatted() {
      return this.dateInicial ? this.formatDate(this.dateInicial) : "";
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.checkbox = false;
      this.dateInicial = null;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
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
</style>
