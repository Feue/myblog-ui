<template>
  <el-container class="layout">
    <el-header class="header">
      <el-affix><Header></Header></el-affix>
    </el-header>
    <el-main class="body">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Header from "@/layout/Header.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "layout",
  components: {
    Header,
  },
});
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
  padding: 0;
  margin: auto;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.2);
}
.el-header {
  padding: 0;
}
</style>
