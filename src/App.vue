<template>
  <v-app class="bg-grey-lighten-5">
    <app-bar></app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import AppBar from './components/app/app-bar.vue'
</script>
