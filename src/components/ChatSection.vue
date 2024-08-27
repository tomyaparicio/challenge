<template>
  <v-card class="chat-card" outlined>
    <v-card-title class="text-uppercase text-subtitle-2">Chat</v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item
          v-for="(item, index) in chatMessages"
          :key="index"
          class="chat-item"
        >
          <div class="avatar-wrapper">
            <div class="avatarpng">
              <img :src="item.avatar" alt="Avatar" />
            </div>
            <span v-if="item.notification" class="notification-badge">
              {{ item.notification }}
            </span>
          </div>
          <v-list-item-content>
            <v-list-item-title class="chat-name">{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle class="chat-message">
              {{ item.message }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <div class="chat-time">{{ item.time }}</div>
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
        {
          name: 'Helen Brooks',
          message:
            'Luna has been scratching her ears a lot lately and shaking her head...',
          avatar: require(`@/assets/foto1svg.svg`),
          time: '15:56',
          notification: null,
        },
        {
          name: 'Kathryn Murphy',
          message: 'The best way to treat an ear infection...',
          avatar: require(`@/assets/foto2svg.svg`),
          time: 'Wed',
          notification: 1,
        },
        {
          name: 'James Grey',
          message:
            'You should follow the instructions on the ear drops label, but usually y...',
          avatar: require(`@/assets/foto3svg.svg`),
          time: 'Tue',
          notification: null,
        },
        {
          name: 'Jim Brown',
          message: 'Hi, I have a question about my cat.',
          avatar: require(`@/assets/foto4svg.svg`),
          time: 'Tue',
          notification: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.chat-card {
  border-radius: 10px;
  padding: 16px;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 12px 0; /* Incrementado de 8px a 16px */
  border-bottom: 1px solid #f1f1f1;
}

.chat-item:last-child {
  border-bottom: none; /* Eliminar la línea en el último elemento */
}

.avatar-wrapper {
  position: relative;
  margin-right: 16px; /* Añadido para separar el avatar del contenido */
}

.avatarpng {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
}

.avatarpng img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff5252;
  color: white;
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.chat-name {
  font-weight: 600;
  font-size: 16px; 
  color: #2e2e2e;
}

.chat-message {
  color: #607d8b;
  font-size: 14px; 
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px; 
}

.chat-time {
  margin-left: auto;
  color: #9e9e9e;
  font-size: 12px;
  white-space: nowrap;
  padding-left: 16px; 
}
</style>
