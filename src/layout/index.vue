<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <NavMenu />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-breadcrumbs :items="levelList"> </v-breadcrumbs>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div>
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavMenu from "./NavMenu";
export default {
  components: { NavMenu },
  data() {
    return {
      drawer: true, // 控制侧边栏状态
      levelList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      this.levelList = this.$route.matched
        .filter((item) => item.meta && item.meta.title)
        .map((item) => {
          return {
            text: item.meta.title,
          };
        });
    },
  },
};
</script>

<style scoped></style>
