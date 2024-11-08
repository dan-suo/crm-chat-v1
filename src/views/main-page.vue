<template>
  <v-container fluid class="border-t-sm">
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
      <!-- First column enters here !!! look for first-column-list.vue to setting first column inner content -->
        <first-column-list></first-column-list>

      </v-col>
      <v-col
        cols="12"
        md="6"
        class="border-thin"
      > Second col content
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="border-thin"
      > Third col content
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import FirstColumnList from '@/components/first column/first-column-list.vue';
</script>

<style scoped>
 
</style>