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
      class="bg-light-blue-accent-4"
    >
      <v-row
        class="mt-3"
      >
        <v-col cols="12" class="text-center mb-n5">
          <v-avatar size="90" color="grey">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" class="opacity-70" />
          </v-avatar>
        </v-col>

        <v-col cols="12" class="text-center mb-n5">
          <p class="text-h6 text-grey-lighten-3 mb-6">Michael</p>
        </v-col>
      </v-row>

      <v-list-item 
        title="NAVIGATION"
        subtitle="click on arrow to close"
        class="mt-6"
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