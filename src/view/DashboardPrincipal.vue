<template>
  <v-app>
  <div style="z-index: 1;">
    <SidebarMenu />
  </div>
    <v-main class="principal">
      <DashboardHeader />
      <v-container fluid>
        
        <!-- Sección 1: Dashboard Cards y Health Monitoring -->
        <v-row  class="fondo" style="z-index: -1;">
          <v-col cols="12" md="7">
            <v-row>
              <v-col cols="12" md="4" class="" >
                <DashboardCard title="Activity" subtitle="Daily" :value="25" color="red" />
              </v-col>
              <v-col cols="12" md="4">
                <DashboardCard title="Sleep" subtitle="Weekly" :value="79" color="green" />
              </v-col>
              <v-col cols="12" md="4">
                <DashboardCard title="Wellness" subtitle="Weekly" :value="52" color="orange" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <HealthMonitoring />
              </v-col>
            </v-row>
          </v-col>

          <!-- Sección 2: Vaccination Schedule y Chat Section -->
          <v-col cols="12" md="5">
            <v-row>
              <v-col cols="12">
                <VaccinationSchedule />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <ChatSection />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue';
import DashboardHeader from '../components/DashboardHeader.vue';
import DashboardCard from '../components/DashboardCard.vue';
import HealthMonitoring from '../components/HealthMonitoring.vue';
import VaccinationSchedule from '../components/VaccinationSchedule.vue';
import ChatSection from '../components/ChatSection.vue';

export default {
  components: {
    SidebarMenu,
    DashboardHeader,
    DashboardCard,
    HealthMonitoring,
    VaccinationSchedule,
    ChatSection,
  },
};
</script>

<style>
.fondo {
  background-color: #F2F5FA;
  padding: 30px;
}
.principal {
  padding: 10px;
}

#app {
  font-family: 'Roboto', sans-serif !important;
}
</style>
