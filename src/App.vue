<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const router = useRouter();
    const changedRoute = computed(() => store.getters.getRouterParams);

    watch(changedRoute, (newVal, _oldVal) => {
      console.log("new:" + newVal);
      router.push(newVal);
    });

    return {};
  },
});
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: url("@/assets/img/snowy.jpg");
  background-size: 100% 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.el-card {
  border: 1px solid #1954cb;
  background-color: #545c64;
  overflow: hidden;
  color: #f3f3f5;
}
.el-tag {
  white-space: normal;
  height: auto;
}
</style>
