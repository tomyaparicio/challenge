<template>
  <v-container class="register-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-scale-transition>
        <v-col cols="12" sm="8" md="3">
          <v-card class="animated-card">
            <v-card-title class="justify-center register-header">
              <v-layout row align-center justify-center>
                <img src="@/assets/Frame.svg" alt="PetCare" class="login-logo" />
                <h1 class="ml-2">PetCare.</h1>
              </v-layout>
            </v-card-title>
            <v-card-text class="px-6 py-4">
              <v-fade-transition>
                <h1 class="register-title">Sign Up</h1>
              </v-fade-transition>
              <v-form ref="form" @submit.prevent="register">
                <v-text-field
                  label="Email"
                  v-model="email"
                  prepend-icon="mdi-email"
                  type="email"
                  outlined
                  :rules="[rules.required, rules.email]"
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
                  :rules="[rules.required]"
                  required
                  :disabled="loading"
                   @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn
                  :disabled="loading"
                  style="background: #3788e5; color: white"
                  type="submit"
                  block
                  large
                  class="registerBtn mb-4"
                >
                  <template v-if="!loading">
                    <h4>Sign Up</h4>
                  </template>
                  <template v-else>
                    <v-progress-circular
                      indeterminate
                      color="white"
                      size="24"
                    ></v-progress-circular>
                  </template>
                </v-btn>
              </v-form>
              <v-divider class="my-4"></v-divider>
              <v-btn
                color="dark"
                block
                @click="goToLogin"
                large
                class="registerBtn mb-2"
                :disabled="loading"
              >
                Back to Login
              </v-btn>
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
      loading: false,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      }, // Controla el estado de carga
    };
  },
  methods: {
    register() {
    // Verificamos si el formulario es válido utilizando las reglas de validación establecidas
    if (this.$refs.form.validate()) {
        // Si el formulario es válido, activamos el estado de carga
        this.loading = true;

        // Simulamos un retardo de 1 segundo utilizando `setTimeout`, imitando el tiempo de espera de una llamada a una API
        setTimeout(() => {
            // Creamos un objeto `user` con las propiedades `email` y `password` obtenidas del formulario
            const user = {
                email: this.email,
                password: this.password,
            };

            // Recuperamos el array de usuarios almacenado en `localStorage` o, si no existe, inicializamos un array vacío
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Añadimos el nuevo usuario al array de usuarios
            users.push(user);

            // Guardamos el array actualizado de usuarios en `localStorage`
            localStorage.setItem('users', JSON.stringify(users));

            // Verificamos si la ruta actual no es `/login` para evitar redirección redundante
            if (this.$route.path !== '/login') {
                // Si no estamos ya en la ruta `/login`, redirigimos al usuario a esa página
                this.$router.push('/login');
            }
        }, 1000); // El código dentro de este bloque se ejecutará después de 1 segundo
    } else {
        // Si la validación del formulario falla, desactivamos el estado de carga y mostramos una alerta
        this.loading = false;
        alert('Please enter a valid email and password.');
    }
},
  goToLogin() {
    // Evitar redirección redundante
    if (this.$route.path !== '/login') {
      this.$router.push('/login');
    }
  },
},


};
</script>

<style scoped>
.register-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f2f5fa;
  background-size: 600% 600%;
  animation: gradientAnimation 10s ease infinite;
}

.v-card {
  border-radius: 16px;
  background-color: #ffffff;
  border: 2px solid #dae3f8;
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

.register-header {
  background-color: #f2f5fa;
  padding: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.login-logo {
  height: 60px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.register-title {
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

.registerBtn {
  border-radius: 10px !important;
}
</style>
