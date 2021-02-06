<template>
  <div>
    <v-text-field></v-text-field>
    <v-text-field label="为输入长度创建一个计数器" :counter="10"></v-text-field>
    <v-text-field label="可清空" clearable></v-text-field>
    <v-text-field label="可清空" show-password></v-text-field>
    <v-text-field label="密码输入框" type="password"></v-text-field>
    <v-text-field label="数字输入框" type="number"></v-text-field>
    <v-text-field label="添加前缀" prefix="https://"></v-text-field>
    <v-text-field label="反转输入方向" reverse></v-text-field>
    <v-text-field label="改变输入框的样式" solo></v-text-field>
    <v-text-field
      label="字段验证"
      :rules="[(v) => (v && v.length <= 10) || 'Name must be less than 10 characters']"
    ></v-text-field>
    <v-text-field label="添加后缀" suffix=".com"></v-text-field>
    <v-text-field label="后面有图标" append-icon="mdi-close"></v-text-field>
    <v-text-field label="在输入框内部，文字之后添加一个内容">
      <div slot="append">呵呵呵呵</div>
    </v-text-field>
    <v-text-field label="在前面加图标" prepend-icon="mdi-heart"></v-text-field>
    <v-text-field label="在输入框外部，前面添加一个内容">
      <div slot="prepend" style="font-size:24px">标</div>
    </v-text-field>
    <v-text-field label="在输入框中添加图标" prepend-inner-icon="mdi-close"></v-text-field>
    <v-text-field label="设置输入框背景色" background-color="warning"></v-text-field>
    <v-text-field label="设置组件的颜色" color="error"></v-text-field>
    <v-text-field label="减少输入框高度" dense></v-text-field>
    <v-text-field label="禁用" disabled></v-text-field>
    <v-text-field label="只读状态" value="55555" readonly></v-text-field>
    <v-text-field label="手动设置为错误状态" error></v-text-field>
    <v-text-field label="设置组件高度" height="50"></v-text-field>
    <v-text-field label="有提示文本" hint="只支持英文，数字，下划线"></v-text-field>
    <v-text-field label="加载状态" loading></v-text-field>
  </div>
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
