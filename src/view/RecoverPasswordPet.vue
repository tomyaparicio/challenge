<template>
    <v-container class="recover-container" fluid>
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card elevation="3">
            <v-card-title>
              <v-layout justify-center>
                <v-icon color="primary" size="48">mdi-key</v-icon>
              </v-layout>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="recoverPassword">
                <v-text-field
                  label="Correo Electrónico"
                  v-model="email"
                  prepend-icon="mdi-email"
                  type="email"
                  required
                ></v-text-field>
                <v-btn color="primary" type="submit" block large class="mb-4">
                  Recuperar Contraseña
                </v-btn>
              </v-form>
              <v-divider class="my-4"></v-divider>
              <v-btn color="secondary" block @click="goToLogin" large>
                Volver al Inicio de Sesión
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      recoverPassword() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === this.email);
        
        if (user) {
          alert(`Tu contraseña es: ${user.password}`);
        } else {
          alert('Correo no encontrado.');
        }
      },
      goToLogin() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .recover-container {
    background-color: #f0f4f7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .v-card {
    border-radius: 16px;
  }
  
  .v-btn {
    border-radius: 30px;
  }
  </style>
  