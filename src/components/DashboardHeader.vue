<template>
    <v-app-bar color="white" flat
    class="search-input">
      <v-text-field
        dense
        outlined
        solo
        flat
        prepend-inner-icon="mdi-magnify"
        placeholder="Search"
        hide-details
        class="search-input"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="addWidget">
        Add widget
      </v-btn>
    </v-app-bar>
</template>
  
  <script>
  export default {
    methods: {
      addWidget() {
        console.log("Widget added");
      },
    },
  };
  </script>

 <style>
.search-input {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}
</style>
  