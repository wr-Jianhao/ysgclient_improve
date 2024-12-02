<template>
  <div style="background-color: rgba(240, 242, 245, 1)">
    <HeaderBar />
    <FilterBox :data-object="patentData" />
    <el-row
      style="
        width: 1500px;
        margin: 20px auto;
        background-color: rgba(240, 242, 245, 1);
      "
    >
      <el-col :span="20" style="display: flex; flex-direction: row">
        <el-button class="sort-btn">热度排序</el-button>
        <el-button class="sort-btn">价格排序</el-button>
        <el-button class="sort-btn">下证时间</el-button>
        <el-button class="sort-btn">字符数量</el-button>
        <el-button class="sort-btn">人气排序</el-button></el-col
      >

      <el-col :span="4">
        <el-button
          class="sort-btn"
          style="
            margin-left: 150px;
            background-color: rgba(91, 104, 207, 1);
            color: white;
          "
          @click="publish"
          >上传专利许可
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        border
        :data="resData"
        style="width: 1500px; margin: 10px auto"
        @row-click="goToDetail"
        v-loading="loading"
      >
        <el-table-column
          v-for="(column, index) in columns"
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
        >
        </el-table-column>
      </el-table>
    </el-row>
    <el-row :gutter="10">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="resData.length"
        layout=" prev, pager, next, jumper"
        style="margin-top: 20px"
        class="el-page"
      >
      </el-pagination>
    </el-row>

    <BottomBar />
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from "vue";
import { getFilterData } from "@/components/FilterBox/utils/data.js";
import HeaderBar from "@/components/Header/index.vue";
import FilterBox from "@/components/filterbox/index.vue";
import BottomBar from "@/components/bottom/index.vue";
import router from "@/router";
import store from "@/store";
import apiClient from "@/utils/request";
const patentData = ref(getFilterData("patent"));

const resData = ref([]);
const columns = [
  { prop: "id", label: "序号", width: "100px" },
  { prop: "publication_num", label: "专利申请号", width: "200px" },
  { prop: "patent_name", label: "专利名称", width: "200px" },
  { prop: "patentee", label: "专利权人", width: "200px" },
  { prop: "industrial_classification", label: "所属产业", width: "200px" },
  { prop: "payment_type", label: "许可类型", width: "200px" },
  { prop: "valid_period", label: "单次许可期限", width: "200px" },
  { prop: "license_scope", label: "单次许可范围", width: "200px" },
];
const loading = ref(true);
const fetchData = async () => {
  loading.value = true;
  const requestData = {
    currentPage: 1,
    patent_type: 0,
    source_type: 0,
    payment_type: 0,
    industrial_classification: 0,
  };

  try {
    const response = await apiClient.post(
      "/ipr/patent/platform/list_patent",
      requestData,
    );

    // 检查是否返回成功数据
    if (response.data && response.data.data) {
      resData.value = response.data.data.list;
    } else {
      throw new Error("未找到数据");
    }
  } catch (err) {
    console.error("数据获取失败:", err);
    // 可以在这里显示错误提示消息到 UI
  } finally {
    loading.value = false;
  }
};

const goToDetail = async (row) => {
  store.commit("SET_PATENT_DATA", row);
  await nextTick();
  router.push("/detail");
};
const publish = () => {
  router.push("/patent/publish");
};
onMounted(() => {
  fetchData();
});
</script>
<style scoped>
.category {
  font-size: 14.4px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 18px;
  color: rgba(91, 104, 207, 1);
  text-align: justify;
  vertical-align: top;
}
.price {
  font-size: 14.4px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 18px;
  color: rgba(91, 104, 207, 1);
  text-align: justify;
  vertical-align: top;
}
.detail-btn {
  margin-bottom: 20px;
}
.sort-btn {
  color: rgba(91, 104, 207, 1);
  border-radius: 4.8px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
:deep(.el-table th) {
  background-color: white; /* 设置表头背景颜色 */
  color: #333; /* 设置表头字体颜色 */
  font-weight: bold; /* 设置表头字体为粗体 */
}
.el-page {
  display: flex;
  justify-content: center; /* Center the pagination */
  align-items: center;
  margin-top: 20px;
  margin: 0 auto;
}
</style>
