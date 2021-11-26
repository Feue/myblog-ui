<template>
  <div class="friendnews">
    <PublishNews></PublishNews>
    <NewsCard></NewsCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import PublishNews from "@/views/friendnews/publishNewsCard.vue";
import NewsCard from "@/views/friendnews/NewsCard.vue";

export default defineComponent({
  name: "FriendNews",
  components: {
    PublishNews,
    NewsCard,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.friendnews {
  margin: auto;
  width: 70%;
}
</style>
