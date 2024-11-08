<template>
  <v-card 
    class="bg-blue-lighten-1 mt-4"
    v-for="chat in chatProps"
    :key="chat.chatId"
    :prepend-avatar="chat.userPhoto"
    :title="chat.userName"
    :subtitle="chat.lastMessage"
  >
    <template v-slot:append>
      <v-text class="text-grey-lighten-3">{{ chat.lastMessageTimestamp }}</v-text>
    </template>
  </v-card>
</template>

<script setup>

import { reactive } from 'vue'

const chatProps = reactive([
  { chatId: 1, 
    userName: 'Michael', 
    userPhoto: "https://cdn.vuetifyjs.com/images/john.jpg",
    lastMessage: 'Hello',
    lastMessageTimestamp: '15:05', 
    assignedTo: 'Andrew', 
    unreadMessageCount: 0,
    source: 'telegram',
    isOpen: false
  },
  { chatId: 2, 
    userName: 'Ronald', 
    userPhoto: "https://cdn.vuetifyjs.com/images/john.jpg",
    lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    lastMessageTimestamp: '17:15', 
    assignedTo: 'Andrew', 
    unreadMessageCount: 0,
    source: 'telegram',
    isOpen: false
  },
  { chatId: 3, 
    userName: 'Ronald', 
    userPhoto: "https://cdn.vuetifyjs.com/images/john.jpg",
    lastMessage: 'Never give up',
    lastMessageTimestamp: '17:15', 
    assignedTo: 'Andrew', 
    unreadMessageCount: 0,
    source: 'telegram',
    isOpen: false
  },
  { chatId: 4, 
    userName: 'Ronald', 
    userPhoto: "https://cdn.vuetifyjs.com/images/john.jpg",
    lastMessage: 'Never give up',
    lastMessageTimestamp: '17:15', 
    assignedTo: 'Andrew', 
    unreadMessageCount: 0,
    source: 'telegram',
    isOpen: false
  }
])
</script>

<style>

</style>