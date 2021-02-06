<template>
  <v-list class="overflow-y-auto" max-height="calc(100vh - 67px)">
    <v-list-item-group color="primary">
      <v-list-item to="/home">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>首页</v-list-item-title>
      </v-list-item>
    </v-list-item-group>

    <v-list-group prepend-icon="mdi-account-circle" no-action>
      <template v-slot:activator>
        <v-list-item-title>组件</v-list-item-title>
      </template>
      <v-list-item to="/button">
        <v-list-item-title>按钮</v-list-item-title>
      </v-list-item>
      <v-list-item to="/input">
        <v-list-item-title>输入框</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-list-item-group color="primary">
      <v-list-item to="/home">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>菜单4</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
