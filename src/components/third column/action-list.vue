<template>
  <v-list class="bg-grey-lighten-5">
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :value="item"
    > 
    <template v-slot:prepend>
        <v-icon
          :icon="item.icon"
        ></v-icon>
    </template>
    <v-list-item-title>
        {{ item.title }}
    </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: 'Set remember', icon: 'mdi-bell-badge-outline'},
            { title: 'Invite operator', icon: 'mdi-account-arrow-left-outline'},
            { title: 'Send chat', icon: 'mdi-send-variant-outline'},
            { title: 'Join to CRM', icon: 'mdi-plus'},
            { title: 'To spam', icon: 'mdi-block-helper'}
        ],
    })
}
</script>

<style>

</style>