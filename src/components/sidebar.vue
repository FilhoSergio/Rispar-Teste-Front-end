<template>
  <v-stepper v-model="e6" vertical non-linear>
    <v-stepper-step :complete="e6 > 1" step="1">
      Cadastro
      <small>Dados iniciais</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn text>Cancel</v-btn> -->
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2"
      >Pedido
      <small> Detalhe do empréstimo </small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3"
      >Transferência
      <small> Garantia em Bitcoin </small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>



