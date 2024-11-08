<template>
  <v-container fluid>
    <v-row
      class="justify-start"
    >
      <v-col 
        cols="10"
      >
        <v-text-field
          label="Search"
          placeholder=""
          append-inner-icon="mdi-magnify"
          variant="outlined"
          hint="Enter what you want to find"
          class="h-20"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="border-b-thin">
        <v-sheet class="ml-1 bg-grey-lighten-5 mt-n4 mb-n4 text-grey">My dialogs</v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <chat-item></chat-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

  import ChatItem from '@/components/first column/chat-item.vue'
  
</script>

<style>

</style>