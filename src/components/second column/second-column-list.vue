<template>
  <v-container fluid>

    <v-row class="justify-center">
      <v-col cols="11">

        <v-card flat class="bg-grey-lighten-5">
          <v-card-item>
            <template v-slot:prepend>
              <v-icon class="pr-6" color="primary">mdi-arrow-right</v-icon>
            </template>
            <v-card-title>Name of person</v-card-title>
            <v-card-subtitle>You are now on www.bestsite</v-card-subtitle>
            <template v-slot:append>
              <v-btn
                variant="tonal"
                class="text-blue-darken-1 ml-2"
              >
                <v-icon>mdi-location-exit</v-icon>
              </v-btn>
            </template>
          </v-card-item>
        </v-card>

      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <!-- dialog messages component -->
        <dialog-item></dialog-item>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <!-- textarea component -->
            <textarea-input></textarea-input>
        </v-col>
    </v-row>
    
  </v-container>
</template>

<script setup>
import DialogItem from './dialog-item.vue';
</script>

<style>

</style>