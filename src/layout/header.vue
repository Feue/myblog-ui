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
        <el-space size="large" wrap>
          <el-popover popper-class="pop" :width="200" trigger="click">
            <template #reference>
              <el-avatar
                shape="square"
                :size="40"
                :src="img"
                fit="cover"
                class="avatar"
              ></el-avatar>
            </template>
            <Profile></Profile>
          </el-popover>
          <el-popover :width="200" trigger="click">
            <template #reference>
              <el-icon style="cursor: pointer" size="30"><User /></el-icon>
            </template>
            <FriendList></FriendList>
          </el-popover>
        </el-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import img from "@/assets/img/portrait.jpg";
import { computed, defineComponent } from "@vue/runtime-core";
import { User } from "@element-plus/icons";
import Profile from "@/views/profile/profile.vue";
import FriendList from "@/views/friendlist/friendList.vue";

export default defineComponent({
  name: "Header",
  components: {
    Profile,
    FriendList,
    User,
  },
  setup() {
    const store = useStore();

    return {
      img,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  width: 100%;
  height: 60px;
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
.avatar {
  margin-top: 10px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
}
.name {
  cursor: pointer;
  color: #409eff;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
}
</style>

<style lang="scss">
.el-popover.pop {
  text-align: center;
}
</style>
