<template>
  <v-app>
    <v-main>
      <v-container style="max-width: 900px">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer class="pa-2">
      <span>Laizerox &copy; 2021</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vuetify.js',
    };
  },
};
</script>
