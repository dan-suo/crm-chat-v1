<template>
  <v-row>

    <v-col
      cols="12"
    >
        <v-card 
          flat
          class="bg-grey-lighten-5"
        >
            <v-card-item>
                <template v-slot:prepend>
                    <v-avatar 
                      color="primary"
                      size="large"
                    ></v-avatar>
                </template>
                <v-card-title class="text-body-1 ml-2">
                     Alice
                </v-card-title>
                <v-chip
                  color="primary"
                  size="small"
                  class="ml-2 mt-1"
                > New
                </v-chip>  
            </v-card-item>
        </v-card>

    </v-col>

    <v-divider></v-divider>

    <v-col
      cols="12"
    >
        <v-card 
          flat
          class="bg-grey-lighten-5"
        >
            <v-card-item>
                <template v-slot:prepend>
                    <v-avatar 
                      color="secondary"
                      size="small"
                    ></v-avatar>
                </template>
                <v-card-subtitle class="ml-2">Responsible</v-card-subtitle>
                <v-card-title class="text-body-1 mt-n1 ml-2">
                     Edward
                </v-card-title>
                <template v-slot:append>
                    <v-btn flat icon="mdi-chevron-down" class="bg-grey-lighten-5"></v-btn>
                </template>
            </v-card-item>
        </v-card>

    </v-col>

    <v-divider></v-divider>

    <v-col cols="12">
        <action-list></action-list>
    </v-col>

  </v-row>
</template>

<script setup>
  import ActionList from '@/components/third column/action-list.vue'
</script>

<style>

</style>