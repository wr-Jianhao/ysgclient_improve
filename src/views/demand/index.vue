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
      需求市场
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
          v-for="item in paginatedData"
          :key="item"
          class="demand-card"
          @click="goToDetail(item)"
        >
          <p class="title" style="width: 1000px">
            {{ item.title }}
          </p>

          <p class="detail">来源:{{ item.source }}</p>
          <hr style="width: 100%; margin: 0 auto" />
        </div>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="resData.length"
          layout=" prev, pager, next, jumper"
          style="margin-top: 20px"
          :jumper="true"
          :jump-text="`跳转到第`"
          class="el-page"
        />
      </div>
    </div>

    <BottomBar />
  </div>
</template>
<script setup>
import HeaderBar from "@/components/header/index.vue";
import BottomBar from "@/components/bottom/index.vue";
import apiClient from "@/utils/request";

import { ref, onMounted, computed } from "vue";
import store from "@/store";
import router from "@/router";
const loading = ref(true);
const resData = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return resData.value.slice(start, start + pageSize.value);
});
const handleCurrentChange = (page) => {
  currentPage.value = page; // 更新当前页
  // 在这里可以添加进一步的逻辑，比如请求新数据
  // loadDataForPage(page);
};
const getDemandList = async () => {
  try {
    const res = await apiClient.get("/ipr/business_demand/get");
    resData.value = res.data;
  } catch (error) {
    console.log(error);
    alert("加载失败，请刷新网页"); // 或者使用其他方式展示提示
    window.location.reload;
  } finally {
    loading.value = false;
  }
};
const goToDetail = (item) => {
  console.log(item);
  store.commit("SET_DEMAND_DATA", item);
  console.log(store.state.demandData);
  router.push("/demand/detail");
};
onMounted(() => {
  getDemandList();
});
</script>
<style scoped>
.demand-card {
  margin: 10px auto;
  width: 90%;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.demand-card:hover {
  transform: scale(1.05); /* 悬停放大 */
}
.title {
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.detail {
  font-size: 13.5px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 19.55px;
  color: rgba(0, 0, 0, 0.69);
  text-align: left;
  vertical-align: top;
  margin: 0 auto;
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

.el-page {
  display: flex;
  justify-content: center; /* Center the pagination */
  align-items: center;
  margin-top: 20px;
}

/* 自定义分页按钮样式 */
:deep(.el-page .el-pagination__btn) {
  color: #409eff; /* 按钮字体颜色 */
  border: 1px solid #dcdfe6; /* 边框颜色 */
  padding: 5px 10px; /* 内边距 */
  transition: background-color 0.3s; /* 背景颜色过渡效果 */
}

:deep(.el-page .el-pagination__btn:hover) {
  background-color: #f5f7fa; /* 鼠标悬停时的背景颜色 */
}

/* 自定义当前页按钮样式 */
:deep(.el-page .el-pagination__btn.is-active) {
  background-color: #409eff; /* 当前页的背景颜色 */
  color: #fff; /* 当前页的字体颜色 */
}

/* 自定义总数文本样式 */
:deep(.el-page .el-pagination__total) {
  margin: 0 20px; /* 调整总数文本的左右间距 */
  font-size: 14px; /* 字体大小 */
  color: #606266; /* 字体颜色 */
}

/* 自定义跳转输入框样式 */
:deep(.el-page .el-pagination__jump) {
  display: flex; /* 使用 Flexbox */
  align-items: center;
}

:deep(.el-page .el-pagination__jump .el-input) {
  width: 60px; /* 跳转输入框宽度 */
  margin-left: 5px; /* 左边距 */
}
</style>
