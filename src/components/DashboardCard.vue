<template>
  <v-card 
  outlined
  class="dashboard-card" >
    <v-card-text class="dashboard-card-header">
      <v-row align="center" justify="space-between" no-gutters>
        <v-col class="text-uppercase text-subtitle-2">{{ title }}</v-col>
        <v-spacer></v-spacer>
        <v-col class="select-col">
          <v-select
            style=" font-weight: bold !important;"
            :items="['Daily', 'Weekly']"
            v-model="selectedOption"
            dense
            outlined
            hide-details
            class="select-options"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="text-center mt-4">
      <v-progress-circular
        :value="value"
        :color="color"
        :size="160"
        :width="10"
        rotate="-90"
        class="mx-auto progress-circular"
        style="border-radius: 100% !important;"
      >
        <h1 class="percentage text-center">{{ value }}%</h1>
      </v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number,
    color: String,
  },
  data() {
    return {
      selectedOption: 'Daily',
    };
  },
};
</script>

<style scoped>
.dashboard-card {
  background-color: #ffffff;
  border-radius: 10px;
}

.dashboard-card-header {
  padding-bottom: 0;
}

.select-options {
  width: 100px;
}

.select-col {
  text-align: right;
}

.percentage {
  font-size: 40px;
  font-weight:normal;
  color: #2e2e2e;
  font-weight: bold;
}

.progress-circular .v-progress-circular__underlay,
.progress-circular .v-progress-circular__overlay {
  stroke-linecap: round !important;
}
</style>
