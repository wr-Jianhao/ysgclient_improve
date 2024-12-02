<template>
  <div style="background-color: rgba(240, 242, 245, 1); height: auto">
    <HeaderBar />
    <div
      style="
        width: 1300px;
        margin: 0 auto;
        border: 1px solid #ccc;
        padding: 20px;
        margin-top: 20px;
        height: 99vh;
      "
    >
      <p class="title">
        {{ newsData.title }}
      </p>
      <div
        style="display: flex; justify-content: space-around; margin-top: 20px"
      >
        <span class="detail">时间：{{ newsData.date }}</span>
        <span class="detail">来源：{{ newsData.source }}</span>
        <span class="detail">点击数：1000</span>
        <span class="detail">浏览量：1000</span>
      </div>

      <hr />
      <div v-html="newsData.content"></div>
    </div>
    <BottomBar />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import store from "@/store";
import HeaderBar from "@/components/Header/index.vue";
import BottomBar from "@/components/bottom/index.vue";
const newsData = ref({});

onMounted(() => {
  newsData.value = store.state.news;
  console.log(newsData.value);
});
</script>
<style scoped>
.title {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 40px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  word-wrap: break-word; /* 允许单词在行尾换行 */
  overflow-wrap: break-word; /* 兼容
}
.detail {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  margin-left: 20px;
}
.content {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;

  color: rgba(0, 0, 0, 1);
  text-align: justify;
  vertical-align: top;
  word-wrap: break-word; /* 长单词换行 */
  overflow-wrap: break-word; /* 兼容性更好的换行处理 */
  white-space: normal; /* 自动换行 */
  line-height: 1.5;
}
</style>
