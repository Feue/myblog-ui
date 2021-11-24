<template>
  <el-card class="box">
    <template #header>
      <div class="header">
        <span>header</span>
        <el-button type="primary" size="small" round>发表</el-button>
      </div>
    </template>
    <div class="main">
      <el-input
        v-model="text"
        type="textarea"
        :autosize="defaultSize"
        placeholder="说点什么吧..."
        clearable
      ></el-input>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "PublishNews",
  setup() {
    const text = ref("");
    const defaultSize = {
      minRows: 4,
      maxRows: 6,
    };
    return {
      text,
      defaultSize,
    };
  },
});
</script>

<style lang="scss" scoped>
.box {
  margin: auto;
  margin-top: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-card :deep(.el-card__header) {
  padding: 5px;
  // background-color: #545c64;
}
.el-card :deep(.el-card__body) {
  padding: 5px;
  // background-color: #545c64;
}
</style>
