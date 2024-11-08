<template>
  <v-container fluid>
    <v-row>
        <v-col cols="12" md="8">
            <v-card variant="outlined" class="bg-grey-lighten-5">
                <v-card-item>
                    <v-row>
                      <v-col cols="3" md="2">
                        <v-avatar color="primary"></v-avatar>
                      </v-col>
                      <v-col cols="9">
                        <v-card-title class="text-body-1 ml-n6">
                             Alice
                            <span class="text-body-2 text-primary opacity-60 ml-4">10:15</span>
                        </v-card-title>
                      </v-col>
                      
                    </v-row>
                    <v-row class="justify-start mt-n6">
                        <v-col cols="12">
                        <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati recusandae consequuntur iste incidunt unde temporibus, est doloribus soluta cum distinctio placeat voluptatum. Error reiciendis voluptatibus voluptas hic quisquam amet eos.</v-card-text>   
                        </v-col>
                    </v-row>
                    </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row class="justify-end">
        <v-col cols="12" md="8">
            <v-card variant="outlined" class="bg-grey-lighten-5">
                <v-card-item>
                    <v-row class="justify-end">
                      <v-col cols="9" class="d-flex justify-end">
                        <v-card-title class="text-body-1">
                             Edward
                            <span class="text-body-2 text-primary opacity-60 ml-4">10:16</span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="3" md="2" class="d-flex justify-end">
                        <v-avatar color="success"></v-avatar>
                      </v-col>
                    </v-row>
                    <v-row class="justify-start mt-n6">
                        <v-col cols="12">
                        <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati recusandae consequuntur iste incidunt unde temporibus, est doloribus soluta cum distinctio placeat voluptatum. Error reiciendis voluptatibus voluptas hic quisquam amet eos.</v-card-text>   
                        </v-col>
                    </v-row>
                    </v-card-item>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style>

</style>