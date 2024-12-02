<template>
  <div style="background-color: rgba(240, 242, 245, 1)">
    <HeaderBar />

    <p
      style="
        font-size: 36px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 52.13px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        vertical-align: top;
        margin: 10px auto;
      "
    >
      文章/咨询
    </p>

    <div
      style="
        width: 1200px;
        height: 100vh;
        border-radius: 9.75px;
        background: rgba(255, 255, 255, 1);
        margin: 0 auto;
        border: 0.75px solid rgba(193, 151, 222, 1);
      "
    >
      <div v-if="loading" class="loader"></div>
      <div v-else>
        <div
          v-for="item in resData"
          :key="item"
          class="news-card"
          @click="goToDetail(item)"
        >
          <p class="news-title">
            {{ item.title }}
            <span
              style="
                font-size: 12px;
                color: rgba(0, 0, 0, 0.69);
                margin-left: 440px;
              "
            >
              来源:{{ item.source }} 时间:{{ item.date }}
            </span>
          </p>
          <p class="news-detail">
            {{ item.comment }}
          </p>

          <hr style="width: 100%; margin: 0 auto" />
        </div>
      </div>
    </div>
    <BottomBar />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import HeaderBar from "@/components/Header/index.vue";

import BottomBar from "@/components/bottom/index.vue";
import apiClient from "@/utils/request";
import router from "@/router";
import store from "@/store";
const loading = ref(true);
const resData = ref([]);
const fetchNews = async () => {
  try {
    const response = await apiClient.get("/ipr/news/get");
    resData.value = response.data;
    console.log(resData.value);
  } catch (error) {
    console.error("获取数据失败:", error);
  } finally {
    loading.value = false; // 数据请求完成，关闭加载动画
  }
};
const goToDetail = (item) => {
  store.commit("SET_NEWS", item);

  router.push("/news/article");
};
onMounted(() => {
  fetchNews();
});
</script>
<style scoped>
.news-card {
  margin: 0 auto;
  width: 90%;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.news-card:hover {
  transform: scale(1.05); /* 悬停放大 */
}
.news-title {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.news-detail {
  font-size: 13.5px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 19.55px;
  color: rgba(0, 0, 0, 0.69);
  text-align: left;
  vertical-align: top;
}

.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px; /* 确定加载动画的大小 */
  height: 60px; /* 确定加载动画的大小 */
  animation: spin 1s linear infinite; /* 加载动画效果 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 使其居中 */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
