<template>
  <v-card 
    outlined
    class="dashboard-card"
  >
    <v-card-text class="dashboard-card-header">
      <v-row align="center" justify="space-between" no-gutters>
        <v-col cols="6" class="text-uppercase text-subtitle-2 dashboard-title">{{ title }}</v-col>
        <v-spacer></v-spacer>
        <v-col cols="6" class="select-col">
          <v-select
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
        :size="180"
        :width="15"
        rotate="-90"
        class=" progress-circular custom-progress"
      >
        <h1 class="percentage">{{ value }}%</h1>
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
  width: 277.33px;
  height: 330px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e3e8ee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dashboard-card-header {
  padding-bottom: 0;
  padding-top: 0;
}

.select-options {
  width: 100px;
  font-weight: bold;
  text-align: right;
  border: 1px solid #e3e8ee;
  border-radius: 8px;
}

.select-col {
  text-align: right;
}

.dashboard-title {
  font-size: 14px;
  font-weight: bold;
  color: #2e2e2e;
}

.percentage {
  font-size: 2.5rem !important;
  font-weight: bold;
  color: #2e2e2e;
}

.custom-progress .v-progress-circular__overlay {
  stroke-linecap: round !important;
}

.custom-progress .v-progress-circular__underlay {
  stroke-linecap: round !important;
}

@media (max-width: 599px) {
  .dashboard-card {
    padding: 12px;
    width: 90%;
    height: auto;
  }
  .dashboard-title {
    font-size: 12px;
  }
  .percentage {
    font-size: 1.5rem;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .dashboard-title {
    font-size: 13px;
  }
  .percentage {
    font-size: 1.75rem;
  }
}

@media (min-width: 960px) {
  .dashboard-title {
    font-size: 14px;
  }
  .percentage {
    font-size: 2rem;
  }
}
</style>
