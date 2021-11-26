<template>
  <el-space>
    <el-input size="mini" placeholder="输入昵称添加好友"></el-input>
    <el-button type="success" size="mini" :icon="Plus" circle></el-button>
  </el-space>
  <el-table :data="friendList" :show-header="false" size="mini" fit="false">
    <el-table-column prop="nickname"></el-table-column>
    <el-table-column>
      <el-popconfirm
        confirm-button-text="确定"
        cancel-button-text="取消"
        :icon="InfoFilled"
        icon-color="red"
        title="确定删除好友吗？"
      >
        <template #reference>
          <el-button
            type="danger"
            size="mini"
            :icon="Delete"
            circle
          ></el-button>
        </template>
      </el-popconfirm>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Plus, Delete, InfoFilled } from "@element-plus/icons";

interface DataType {
  id: number;
  nickname: string;
}

export default defineComponent({
  name: "FriendList",
  setup() {
    const friendList: DataType[] = [
      {
        id: 1,
        nickname: "111",
      },
      {
        id: 2,
        nickname: "222",
      },
    ];

    return {
      friendList,
      Plus,
      Delete,
      InfoFilled,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden;
}
.el-table__body-wrapper::-webkit-scrollbar {
  width: 0;
}
</style>
