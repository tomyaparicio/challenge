<template>
  <v-container class="recover-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-scale-transition>
        <v-col cols="12" sm="8" md="3">
          <v-card class="animated-card">
            <v-card-title class="justify-center recover-header">
              <v-layout row align-center justify-center>
                <img src="@/assets/Frame.svg" alt="PetCare" class="login-logo"/>
                <h1 class="ml-2">PetCare.</h1>
              </v-layout>
            </v-card-title>
            <v-card-text class="px-6 py-4">
              <v-fade-transition>
                <h1 class="recover-title">Update Password</h1>
              </v-fade-transition>
              <v-form @submit.prevent="verifyAndUpdatePassword">
                <v-text-field
                  label="Email"
                  v-model="email"
                  prepend-icon="mdi-email"
                  type="email"
                  outlined
                  dense
                  required
                  :disabled="isVerified || loading"
                ></v-text-field>

                <!-- Si el correo está verificado, mostrar el campo para la nueva contraseña -->
                <v-text-field
                  v-if="isVerified"
                  label="Nueva Contraseña"
                  v-model="newPassword"
                  prepend-icon="mdi-lock-reset"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  dense
                  outlined
                  required
                  :disabled="loading"
                ></v-text-field>

                <v-btn :disabled="loading" color="primary" type="submit" block large class="recoverBtn mb-4">
                  <template v-if="!loading">
                    {{ isVerified ? 'Update Password' : 'Verify Email' }}
                  </template>
                  <template v-else>
                    <v-progress-circular indeterminate color="white" size="24"></v-progress-circular>
                  </template>
                </v-btn>
              </v-form>
              <v-divider class="my-4"></v-divider>
              <v-btn color="dark" block @click="goToLogin" large class="recoverBtn mb-2" :disabled="loading">
                Back to Login
              </v-btn>

              <!-- Mensajes de validación, error o éxito -->
              <v-alert v-if="isVerified && !passwordUpdated" type="success" class="mt-4" outlined>
                Your email has been verified. Please enter a new password.
              </v-alert>
              <v-alert v-if="passwordUpdated" type="success" class="mt-4" outlined>
                Your password has been updated successfully.
              </v-alert>
              <v-alert v-if="verificationFailed" type="error" class="mt-4" outlined>
                {{ isVerified ? 'Error updating password. Please try again.' : 'Email not found.' }}
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-scale-transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      newPassword: '',
      isVerified: false,
      passwordUpdated: false,
      verificationFailed: false,
      show1: false,
      loading: false // Agregando el estado de carga
    };
  },
  methods: {
    verifyAndUpdatePassword() {
      this.loading = true; // Inicia el estado de carga
      setTimeout(() => { // Simulamos una demora para la operación (puedes ajustar esto)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === this.email);

        if (user && !this.isVerified) {
          // Si el correo está registrado, permitir al usuario ingresar la nueva contraseña
          this.isVerified = true;
          this.verificationFailed = false;
        } else if (this.isVerified && this.newPassword) {
          // Actualiza la contraseña si el correo ya fue verificado
          user.password = this.newPassword;
          localStorage.setItem('users', JSON.stringify(users));
          this.passwordUpdated = true;
          this.verificationFailed = false;
          
          // Esperar 3 segundos antes de redirigir al login
          setTimeout(() => {
            this.$router.push('/login');
          }, 1000);
        } else {
          // Si la verificación falla, muestra un mensaje de error
          this.verificationFailed = true;
        }
        this.loading = false; // Finaliza el estado de carga
      }, 2000); // Simulamos una espera de 2 segundos antes de finalizar la operación
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.recover-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #F2F5FA;
  background-size: 600% 600%;
  animation: gradientAnimation 10s ease infinite;
}

.v-card {
  border-radius: 16px;
  background-color: #ffffff;
  border: 2px solid #DAE3F8;
}

.animated-card {
  animation: bounceIn 0.8s ease;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.recover-header {
  background-color: #F2F5FA;
  padding: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.recover-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 40px;
  color: #3788e5;
  font-weight: 500;
}

.v-btn {
  border-radius: 30px;
  font-weight: bold;
}

.v-text-field input {
  font-size: 16px;
}

.v-card-text {
  padding: 32px;
}

.recoverBtn {	
  border-radius: 10px !important;
}

.login-logo {
  height: 60px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.v-alert {
  border-radius: 8px;
  background-color: #e0f7fa;
  color: #00796b;
  font-weight: bold;
}
</style>
