<template>
  <div>
    <HeaderBar />
    <el-row :gutter="10" style="margin: 0 auto">
      <!-- <el-carousel style="width: 60%; margin: 0 auto" indicator-position="none">
        <el-carousel-item
          v-for="item in 4"
          :key="item"
          style="height: 200px; width: 1400px"
        >
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel> -->
    </el-row>
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
      <div
        v-for="item in resData"
        :key="item"
        style="margin: 0 auto; width: 90%"
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
          {{ item.content }}
        </p>
        <hr style="width: 100%; margin: 0 auto" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import HeaderBar from "@/components/Header/index.vue";

import apiClient from "@/utils/request";
import router from "@/router";
import store from "@/store";
const resData = ref([]);
const fetchNews = async () => {
  const response = await apiClient.get("/ipr/news/get");
  resData.value = response.data;

  console.log(resData.value);
};
const goToDetail = (item) => {
  store.state.news = item;
  router.push("/article");
};
onMounted(() => {
  fetchNews();
});
</script>
<style scoped>
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
</style>
