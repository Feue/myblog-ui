<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const router = useRouter();
    const changedRoute = computed(() => store.getters.routerParams);

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>
