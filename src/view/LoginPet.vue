<template>
  <v-container class="login-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-scale-transition>
        <v-col cols="12" sm="8" md="3">
          <v-card class="animated-card">
            <v-card-title class="justify-center login-header">
              <v-layout row align-center justify-center>
                <img src="@/assets/Frame.svg" alt="PetCare" class="login-logo"/>
                <h1 class="ml-2">PetCare.</h1>
              </v-layout>
            </v-card-title>
            <v-card-text class="px-6 py-4">
              <v-fade-transition>
                <h1 class="login-title">Login</h1>
              </v-fade-transition>

              <!-- Alerta de error -->
              <v-alert v-if="loginError" type="error" dismissible>
                Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
              </v-alert>

              <v-form @submit.prevent="login">
                <v-text-field
                  label="Email"
                  v-model="email"
                  prepend-icon="mdi-email"
                  type="email"
                  :rules="[rules.required, rules.email]"
                  outlined
                  dense
                  required
                  :disabled="loading"
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  dense
                  outlined
                  required
                   @click:append="show1 = !show1"
                  :disabled="loading"
                ></v-text-field>
                <v-btn :disabled="loading" style="background: #3788e5; color: white" type="submit" block large class="loginBtn mb-4">
                  <template v-if="!loading">
                    <h4>Sign in</h4>
                  </template>
                  <template v-else>
                    <v-progress-circular indeterminate color="white" size="24"></v-progress-circular>
                  </template>
                </v-btn>
              </v-form>
              <v-divider class="my-4"></v-divider>
              <v-btn color="dark" block @click="goToRegister" large class="loginBtn mb-2" :disabled="loading">
                Sign up
              </v-btn>
              <div class="text-center">
                <a @click.prevent="goToRecoverPassword" class="forgot-password-link" :class="{ disabled: loading }">I forgot my password</a>
              </div>
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
      password: '',
      show1: false,
      loading: false, // Controla el estado de carga
      loginError: false, // Controla la visibilidad del mensaje de error
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
    };
  },
  methods: {
    // Validación del Usuario
    login() {
      this.loading = true; // Muestra el spinner
      this.loginError = false; // Resetea el mensaje de error

      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === this.email && u.password === this.password);

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.$router.push('/'); // Redirigir al dashboard
        } else {
          // Mostrar el mensaje de error si las credenciales no son correctas
          this.loginError = true;
          this.loading = false; // Oculta el spinner si falla la autenticación
        }
      }, 2000); // Simulación de una llamada a una API o proceso de autenticación
    },
    // Redirigir a la vista de registro
    goToRegister() {
      this.$router.push('/register'); 
    },
    // Redirigir a la vista de recuperación de contraseña
    goToRecoverPassword() {
      this.$router.push('/recover-password'); 
    }
  },

  // Verifica si un usuario está autenticado al cargar el componente y carga la lista de usuarios de localStorage.
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.login-container {
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

.login-header {
  background-color: #F2F5FA;
  padding: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.login-logo {
  height: 60px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.login-title {
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

.loginBtn {	
  border-radius: 10px !important;
}

.forgot-password-link {
  color: #3f51b5;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.disabled {
  pointer-events: none;
  color: grey !important;
}
</style>
