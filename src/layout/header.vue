<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <el-menu
          class="menu"
          :default-active="$route.path"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item route="/friendnews" index="/friendnews"
            >好友动态</el-menu-item
          >
          <el-menu-item route="/home" index="/home">Workspace</el-menu-item>
          <el-menu-item route="/home" index="/home">Info</el-menu-item>
          <el-menu-item route="/home" index="/home">Orders</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <el-dropdown trigger="hover" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-space wrap>
              <span class="name">{{ nickname }}</span>
              <el-avatar
                shape="square"
                :size="40"
                :src="img"
                fit="cover"
                class="avatar"
              ></el-avatar>
            </el-space>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="personalInfo"
                >个人信息</el-dropdown-item
              >
              <el-dropdown-item command="logout" divided
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import img from "@/assets/img/portrait.jpg";
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Header",
  setup() {
    const store = useStore();
    const nickname = computed(() => store.getters.getNickname);

    const handleCommand = (command: any) => {
      switch (command) {
        case "personalInfo":
          personalInfo();
          break;
        case "logout":
          logout();
          break;
      }
    };

    const personalInfo = () => {
      console.log("personalInfo");
      store.commit("changeView", {
        routerParams: {
          name: "PersonalInfo",
        },
      });
    };

    const logout = () => {
      console.log("logout");
      store.commit("changeView", {
        routerParams: {
          name: "Login",
        },
      });
      store.commit("setToken", {
        token: "",
      });
    };

    return {
      nickname,
      img,
      handleCommand,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #545c64;
}
.header {
  margin: auto;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 60px;
  color: #fff;
}
.menu {
  border: 0;
}
.left {
  flex: 2;
  font-size: 24px;
}
.right {
  flex: 1;
  text-align: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.name {
  font-size: 20px;
  height: 50px;
  line-height: 50px;
}
.avatar {
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
</style>
