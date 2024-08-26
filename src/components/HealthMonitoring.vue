<template>
  <v-card  outlined>
    <v-card-title>
      <v-col cols="auto" class="text-uppercase text-subtitle-2 font-weight">
        <span>Health Monitoring</span>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2">
        <v-select
          v-model="selectedPeriod"
          :items="['Daily', 'Weekly', 'Monthly']"
          label=""
          hide-details
          outlined
          dense
          class="period-select"
        ></v-select>
      </v-col>
    </v-card-title>
    <v-card-subtitle class="pb-2">
      <v-row justify="center">
        <v-col cols="auto">
          <v-slide-group show-arrows class="pt-2 mb-4">
            <v-slide-item
              v-for="metric in metrics"
              :key="metric.value"
              style="cursor: pointer;"
            >
              <v-btn
                class="mx-2 btngroup"
                :class="{'btn-active': activeMetric === metric.value}"
                depressed
                rounded
                @click="toggleMetric(metric.value)"
              >
                <v-icon left>{{ metric.icon }}</v-icon>
                {{ metric.text }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text class="pa-0">
      <line-chart :chart-data="chartData" class="chart pa-4"></line-chart>
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
      activeMetric: 'pulse', // Cambié el valor inicial a 'pulse'
      metrics: [
        { text: 'Stress level', value: 'stress', icon: 'mdi-heart-pulse' },
        { text: 'Pulse', value: 'pulse', icon: 'mdi-pulse' },
        { text: 'Temperature', value: 'temperature', icon: 'mdi-thermometer' },
        { text: 'Calories burned', value: 'calories', icon: 'mdi-fire' },
      ],
      chartData: {
        labels: ['September', 'November', 'December', 'January'],
        datasets: [],
      },
    };
  },
  watch: {
    activeMetric(newMetric) {
      this.updateChartData(newMetric);
    },
  },
  mounted() {
    this.updateChartData(this.activeMetric);
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
    updateChartData(metric) {
      const dataMap = {
        stress: [2, 4, 3, 6],
        pulse: [60, 65, 70, 75],
        temperature: [36.5, 36.7, 37.0, 37.2],
        calories: [200, 300, 250, 400],
      };

      this.chartData = {
        labels: ['September', 'November', 'December', 'January'],
        datasets: [
          {
            label: this.getLabel(metric),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: '#36A2EB',
            data: dataMap[metric],
            fill: true,
          },
        ],
      };
    },
    toggleMetric(metric) {
      this.activeMetric = metric;
    },
  },
};
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}

.period-select {
  background-color: white;
  border-radius: 4px;
  font-size: 14px;
}

.btn-active {
  background-color: #36A2EB !important;
  color: white !important;
}

.chart {
  margin-top: -16px;
}

.btngroup {
  border-radius: 10px !important;
}
</style>
