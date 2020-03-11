<template>
  <v-card>
    <v-container>
      <form>
        <v-col cols="12">
          <p class="inline-block mr-145">Nome</p>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            label=""
            required
            full-width
            autofocus
            dense
            solo
            class="inline-block max-width-input"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <p class="inline-block mr-145">E-mail</p>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label=""
            solo
            dense
            class="inline-block max-width-input"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="mt-2">
          <p class="inline-block m-145" >Sexo</p>
          <input type="radio" v-model="gender" v-bind:value="a" />Masculino
          <input
            type="radio"
            class="ml-5 inline-block"
            v-model="gender"
            v-bind:value="b"
          />Feminino
        </v-col>

        <v-col cols="12">
          <p class="inline-block mr-10">Data de Nascimento</p>
          <v-menu
            ref="menu"
            class="inline-block"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                class="inline-block "
                v-model="dateInicialFormatted"
                label=""
                prepend-icon=""
                readonly
                dense
                solo
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              locale="pt-br"
              v-model="dateInicial"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancelar</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
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
  async mounted() {},
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
.inline-block {
  display: inline-block !important;
}
.mr-145 {
  margin-right: 145px !important;
}
.max-width-input {
  width: 330px;
}
.m-145{
  margin-right:145px;
}
</style>
