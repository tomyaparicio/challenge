<template>
    <v-container class="register-container" fluid>
      <v-row justify="center" align="center" class="fill-height">
        <v-scale-transition>
          <v-col cols="12" sm="8" md="3">
            <v-card class="animated-card">
              <v-card-title class="justify-center register-header">
                <v-layout row align-center justify-center>
                    <img src="@/assets/Frame.svg" alt="PetCare" class="login-logo"/>
                  <h1 class="ml-2">PetCare.</h1>
                </v-layout>
              </v-card-title>
              <v-card-text class="px-6 py-4">
                <v-fade-transition>
                  <h1 class="register-title">Sign Up</h1>
                </v-fade-transition>
                <v-form @submit.prevent="register">
                  <v-text-field
                    label="Email"
                    v-model="email"
                    prepend-icon="mdi-email"
                    type="email"
                    outlined
                    dense
                    required
                    :disabled="loading"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    dense
                    outlined
                    required
                    :disabled="loading"
                  ></v-text-field>
                  <v-btn :disabled="loading" style="background: #3788e5; color: white" type="submit" block large class="registerBtn mb-4">
                    <template v-if="!loading">
                      <h4>Sign Up</h4>
                    </template>
                    <template v-else>
                      <v-progress-circular indeterminate color="white" size="24"></v-progress-circular>
                    </template>
                  </v-btn>
                </v-form>
                <v-divider class="my-4"></v-divider>
                <v-btn color="dark" block @click="goToLogin" large class="registerBtn mb-2" :disabled="loading">
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
        loading: false // Controla el estado de carga
      };
    },
    methods: {
      register() {
        this.loading = true;
        setTimeout(() => {
          const user = {
            email: this.email,
            password: this.password
          };
      
          let users = JSON.parse(localStorage.getItem('users')) || [];
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));
      
          this.$router.push('/login');
        }, 1000); // Simulación de una llamada a una API o proceso de registro
      },
      goToLogin() {
        this.$router.push('/login');
      }
    }
  };
  </script>
    
  <style scoped>
  .register-container {
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
  
  .register-header {
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
  