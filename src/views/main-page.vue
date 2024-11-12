<template>
  <v-container fluid class="border-t-sm">

    <v-row>
      <v-col
        cols="12"
        md="3"
        class="border-e-thin"
      >
      <!-- First column enters here !!! look for first-column-list.vue to setting first column inner content -->
        <first-column-list></first-column-list>

      </v-col>

      <v-col
        cols="12"
        md="6"
        class="border-e-thin"
      >
       <!-- Second column enters here !!! look for second-column-list.vue to setting second column inner content -->
        <second-column-list></second-column-list>

      </v-col>

      <v-col
        cols="12"
        md="3"
      > 
      <!-- Third column enters here !!! look for third-column-list.vue to setting second column inner content -->
        <third-column-list></third-column-list>

      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
  import FirstColumnList from '@/components/first column/first-column-list.vue';
  import SecondColumnList from '@/components/second column/second-column-list.vue';
  import ThirdColumnList from '@/components/third column/third-column-list.vue';
</script>

<style scoped>
 
</style>