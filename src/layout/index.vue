<template>
  <el-container class="layout">
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-main class="body">main</el-main>
  </el-container>
</template>

<script lang="ts">
import Header from "@/layout/header.vue";

export default {
  name: "layout",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
.header {
  background-color: #545c64;
}
.aside {
  background-color: #545c64;
}
.body {
  background-color: rgba(255, 255, 255, 0.377);
}
.el-header {
  padding: 0;
}
</style>
