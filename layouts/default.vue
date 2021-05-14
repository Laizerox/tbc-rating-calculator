<template>
  <v-app>
    <v-app-bar app flat>
      <v-container class="container fill-height py-0">
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="isDrawerVisible = !isDrawerVisible" />
        <v-toolbar-title>{{ getPageTitle() }}</v-toolbar-title>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container class="container">
        <div class="d-flex">
          <v-navigation-drawer
            v-model="isDrawerVisible"
            :absolute="$vuetify.breakpoint.smAndDown"
            :bottom="$vuetify.breakpoint.smAndDown"
            class="drawer"
            :permanent="$vuetify.breakpoint.mdAndUp"
            :temporary="$vuetify.breakpoint.smAndDown"
          >
            <v-list dense nav>
              <v-list-item v-for="nav in navigation" :key="nav.name" class="flex-grow-1" exact link :to="nav.link">
                <v-list-item-content>{{ nav.name }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <div :class="{ 'flex-grow-1': true, 'ps-5': $vuetify.breakpoint.mdAndUp }">
            <nuxt />
          </div>
        </div>
        <p class="text-center">
          These calculators are based on data and formulas found in TBC 2.4 client and there can be very small rounding
          errors!
        </p>
      </v-container>
    </v-main>
    <v-footer class="pa-2">
      <span><a href="https://github.com/Laizerox">Laizerox</a> &copy; 2021</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

interface NavigationItem {
  link: { name: string };
  name: string;
}

interface DefaultLayoutData {
  isDrawerVisible: boolean;
  navigation: NavigationItem[];
}

export default Vue.extend({
  data(): DefaultLayoutData {
    return {
      isDrawerVisible: false,
      navigation: [
        { link: { name: 'index' }, name: 'Combat regen calculator' },
        { link: { name: 'hp-regen-calculator' }, name: 'Health regen calculator' },
        { link: { name: 'mp-regen-calculator' }, name: 'Mana regen calculator' },
      ],
    };
  },
  methods: {
    getPageTitle(): string {
      return this.navigation.find((nav: NavigationItem) => nav.link.name === this.$nuxt.$route.name)?.name || 'Title';
    },
  },
});
</script>

<style>
.container {
  max-width: 900px;
}
.drawer {
  background-color: unset !important;
}
</style>
