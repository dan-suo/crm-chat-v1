<template>
  <nav>

    <!-- AppBar & Toolbar -->

    <v-app-bar
      density="compact"
      flat
    >
      <v-toolbar app class="bg-grey-lighten-5">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="text-grey-lighten-1 opacity-80">CRM</span>
          <span class="text-grey-darken-2 opacity-80">CHAT</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>

    <!-- Navigation Drawer -->

    <v-navigation-drawer 
      bottom 
      v-model="drawer"
      class="bg-deep-purple-lighten-2"
    >
      <v-list-item 
        title="NAVIGATION"
        subtitle="click on arrow to close"
      >
        <template v-slot:append>
          <v-btn icon="mdi-arrow-left" @click="drawer = !drawer" variant="plain"></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        density="compact"
      >
        <v-list-item 
          v-for="link in links" 
          :key="link.title" 
          :to="link.route" 
          :prepend-icon="link.icon" 
          :title="link.title"
          class="opacity-90"
        >
        </v-list-item>
        </v-list>

    </v-navigation-drawer>

  </nav>
</template>

<script>

export default {
  data: () => ({
    drawer: false,
    links: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
      { title: 'About', icon: 'mdi-account', route: '/about-page' },
      { title: 'Phone', icon: 'mdi-phone', route: '/one-more-page' },
    ]
  }),
}
</script>

<style>

</style>