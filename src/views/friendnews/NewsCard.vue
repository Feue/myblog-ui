<template>
  <el-card>
    <template #header>
      <div class="header">
        <el-space wrap>
          <el-avatar class="avatar" :src="avatar"></el-avatar>
          <el-tag effect="plain">{{ nickname }}</el-tag>
        </el-space>
        <el-space wrap>
          <el-tag>{{ date }}</el-tag>
          <el-button circle>
            <el-icon><MoreFilled /></el-icon
          ></el-button>
        </el-space>
      </div>
    </template>
    <el-row>
      <p class="content">{{ content }}</p>
    </el-row>
    <el-row class="footer">
      <el-button v-if="flag" @click="flag = !flag" circle>
        <el-icon class="is-loading"><Star /></el-icon>
      </el-button>
      <el-button type="warning" v-if="!flag" @click="flag = !flag" circle>
        <el-icon class="is-loading"><StarFilled /></el-icon>
      </el-button>
      <el-button circle>
        <el-icon><ChatSquare /></el-icon>
      </el-button>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import avatar from "@/assets/img/portrait.jpg";
import { MoreFilled, Star, StarFilled, ChatSquare } from "@element-plus/icons";

export default defineComponent({
  name: "NewsCard",
  components: {
    MoreFilled,
    Star,
    StarFilled,
    ChatSquare,
  },
  setup() {
    const nickname = "Feue666";
    const date = "2021-11-24 11:08";
    const content =
      "寒日如纱，伴着天边寥寂的星空，诗词如画，刻着别味非凡的心境。\
      手捧一本散文诗集，初读那唯美的文字时便爱上了它，那别样的不凡笔触如同轻柔的手；\
      通向心灵的桥；又好似冬日里一抹暖阳，包裹着我的心。渐渐地，我越来越喜欢上它，\
      一次又一次书店柜台图书那小小的角落，我都找到它们。沉浸了心也跟着在那悠长悠长有寂寥的《雨巷》。";
    const flag = ref(true);

    return {
      nickname,
      date,
      content,
      avatar,
      flag,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.el-card :deep(.el-card__header) {
  padding: 5px;
  // background-color: #545c64;
}
.el-card :deep(.el-card__body) {
  padding: 5px;
  // background-color: #545c64;
}
.content {
  text-align: justify;
}
.footer {
  float: right;
}
</style>
