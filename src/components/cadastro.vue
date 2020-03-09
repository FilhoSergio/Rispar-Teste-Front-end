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
        <div class="mt-2">
          <p>Sexo / Gênero (opcional)</p>
          <input type="radio" v-model="gender" v-bind:value="a" />Masculino
          <input
            type="radio"
            class="ml-5"
            v-model="gender"
            v-bind:value="b"
          />Feminino
        </div>

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
     
        <!-- <v-card-actions>
          <v-btn class="m-4 main-color-bg text-white" @click="clear"
            >Limpar</v-btn
          >
          <v-spacer></v-spacer>   
        </v-card-actions> -->
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
    email: { required, email }
  },

  data: () => ({
    name: "",
    email: "",
    form_data: {},
    column: null,
    row: null,
    date: new Date().toISOString().substr(0, 10),
    dateInicial: null,
    menu: false,
    modal: false,
    menu2: false,
    a: 0,
    b: 1,
    gender: null
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
      this.gender = null;
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
.text-white {
  color: white;
}
</style>
