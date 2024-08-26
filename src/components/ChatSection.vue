<template>
    <v-card>
      <v-card-title class="text-uppercase text-subtitle-2">Chat</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="(item, index) in chatMessages" :key="index">
           
              <div class="avatarpng"> 
                <img :src="item.avatar" alt="Avatar">
              </div>
          
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.message }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
</template>
  
  <script>
  export default {
    data() {
      return {
        chatMessages: [
          { name: 'Helen Brooks', message: 'Luna has been scratching her ears a lot lately and shaking her head...', avatar: require(`@/assets/foto1svg.svg`)},
          { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection...', avatar: require(`@/assets/foto2svg.svg`) },
          { name: 'James Grey', message: 'You should follow the instructions...', avatar: require(`@/assets/foto3svg.svg`) },
          { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', avatar: require(`@/assets/foto4svg.svg`) },
        ],
      };
    },
  };
</script>


<style scoped>
.avatarpng {
  margin-right: 4%;
  margin-bottom: 3%;
}
</style>