<template>
  <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-subheader class="pl-0">Always show thumb label</v-subheader>
          <v-slider v-model="slider" thumb-label="always"></v-slider>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn class="m-4" @click="clear" color="primary">Limpar</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary pull-right" @click="submit">Próximo</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      slider: 45
    };
  }
};
</script>
