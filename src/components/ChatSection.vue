<template>
    <v-card>
      <v-card-title>Chat</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="(item, index) in chatMessages" :key="index">
            <v-list-item-avatar>
              <v-avatar>
                <img :src="item.avatar" alt="Avatar">
              </v-avatar>
            </v-list-item-avatar>
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
          { name: 'Helen Brooks', message: 'Luna has been scratching her ears...', avatar: 'path_to_avatar' },
          { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection...', avatar: 'path_to_avatar' },
          { name: 'James Grey', message: 'You should follow the instructions...', avatar: 'path_to_avatar' },
          { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', avatar: 'path_to_avatar' },
        ],
      };
    },
  };
  </script>
  