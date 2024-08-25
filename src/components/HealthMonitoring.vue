<template>
  <v-card>
    <v-card-title>
      Health Monitoring
      <v-spacer></v-spacer>
      <v-select
        v-model="selectedPeriod"
        :items="['Daily', 'Weekly', 'Monthly']"
        label="Period"
        hide-details
        dense
      ></v-select>
    </v-card-title>
    <v-card-subtitle>
      <v-btn-group>
        <v-btn :color="activeMetric === 'stress' ? 'primary' : ''" @click="activeMetric = 'stress'">Stress level</v-btn>
        <v-btn :color="activeMetric === 'pulse' ? 'primary' : ''" @click="activeMetric = 'pulse'">Pulse</v-btn>
        <v-btn :color="activeMetric === 'temperature' ? 'primary' : ''" @click="activeMetric = 'temperature'">Temperature</v-btn>
        <v-btn :color="activeMetric === 'calories' ? 'primary' : ''" @click="activeMetric = 'calories'">Calories burned</v-btn>
      </v-btn-group>
    </v-card-subtitle>
    <v-card-text>
      <line-chart :chart-data="chartData"></line-chart>
    </v-card-text>
  </v-card>
</template>

<script>
import { Line } from 'vue-chartjs';
import 'chart.js';

export default {
  components: {
    LineChart: {
      extends: Line,
      props: ['chartData'],
      mounted() {
        this.renderChart(this.chartData, {
          responsive: true,
          maintainAspectRatio: false,
        });
      },
    },
  },
  data() {
    return {
      selectedPeriod: 'Monthly',
      activeMetric: 'stress',
      chartData: {
        labels: ['September', 'November', 'December', 'January'],
        datasets: [
          {
            label: 'Stress level',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: '#36A2EB',
            data: [2, 4, 3, 6, 4],
            fill: true,
          },
        ],
      },
    };
  },
  watch: {
    activeMetric(newMetric) {
      this.updateChartData(newMetric);
    },
  },
  methods: {

    getLabel(metric) {
      const labels = {
        stress: 'Stress level',
        pulse: 'Pulse',
        temperature: 'Temperature',
        calories: 'Calories burned',
      };
      return labels[metric];
    },
  },
};
</script>

<style scoped>
.v-btn-group {
  margin-bottom: 16px;
}
</style>
