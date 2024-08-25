<template>
  <v-navigation-drawer  app permanent>
    <v-list  class="drawer">
      <!-- Logo y título -->
      <v-list-item class="logo-container">
        <v-list-item-content>
          <v-list-item-title class="text-h6 font-weight-bold">
            <img src="@/assets/cat.png" alt="PetCare Logo" class="logo"/>
            PetCare.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    <div class="drawer">
      <!-- Sección de menú -->
      <v-subheader class="subheader">MENU</v-subheader>
      <v-list-item-group dense>
        <v-list-item link class="menu-item justify-center" dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link class="menu-item" dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-paw</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Pet profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <!-- Divider -->
      <v-divider class="divider"></v-divider>

      <!-- Sección de Analytics -->
      <v-subheader class="subheader">ANALYTICS</v-subheader>
      <v-list-item-group>
        <v-list-item link class="menu-item" dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-heart-pulse</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Health monitoring</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link class="menu-item" dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Vaccination schedule</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <!-- Divider -->
      <v-divider class="divider"></v-divider>

      <!-- Sección de Schedule -->
      <v-subheader class="subheader">SCHEDULE</v-subheader>
      <v-list-item-group>
        <v-list-item link class="menu-item" dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-chat</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Chat</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link class="menu-item"  dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-calendar-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Appointments</v-list-item-title>
            <!-- <v-chip color="red" class="ml-2 chip" small>2</v-chip> -->
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <!-- Divider -->
      <v-divider class="divider"></v-divider>

      <!-- Sección de ayuda -->
      <v-subheader class="subheader">HELP</v-subheader>
      <v-list-item-group>
        <v-list-item link class="menu-item" dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link class="menu-item" dense>
          <v-list-item-icon>
            <v-icon class="icon">mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Documentation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </div>
    </v-list>
  
    <!-- Log out en el pie del drawer -->
    <v-list class="drawer-footer">
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title  dense>Log out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
 
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo-container {
  margin-bottom: 10%; /* Elimina cualquier margen superior */
}

.logo {
  max-width: 24px;
  margin-right: 8px;
}

.v-navigation-drawer {
  display: flex;
  flex-direction: column;
}

.subheader {
  font-size: 14px;
}

.menu-title {
  font-size: 14px;
  color: #2e2e2e;
}

.drawer-footer {
  padding-top: 70% !important;
}

.drawer {
  padding: 1% !important;
}

.divider {
  margin-top: 15px;
  margin-bottom: 10px;
}

.icon {
  color: #607d8b;
  padding-right: 0px !important;
  margin-right: 0px !important;
}

v-list-item {	
  padding: 0 !important;
  margin-right: 0% !important;
}
</style>
