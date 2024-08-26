<template>
  <v-app>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
      <router-view />
    </v-app>
</template>

<script>



export default {
  name: 'App',
  components: {
 
  },  

  data: () => ({
    //
  }), 

}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif !important;
}

#app {
  font-family: 'Roboto', sans-serif !important;
}
</style>
