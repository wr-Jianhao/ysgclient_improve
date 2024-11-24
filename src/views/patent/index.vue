<template>
  <div>
    <HeaderBar />
    <FilterBox :data-object="patentData" />
    <el-row style="width: 80%; margin: 20px auto; background-color: white">
      <el-button class="sort-btn">热度排序</el-button>
      <el-button class="sort-btn">价格排序</el-button>
      <el-button class="sort-btn">下证时间</el-button>
      <el-button class="sort-btn">字符数量</el-button>
      <el-button class="sort-btn">人气排序</el-button>
    </el-row>
    <el-row>
      <el-table
        border
        :data="resData"
        style="width: 80%; margin: 10px auto"
        @row-click="goToDetail"
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

    <BottomBar />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
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
  { prop: "patent_id", label: "专利申请号", width: "200px" },
  { prop: "patent_name", label: "专利名称", width: "250px" },
  { prop: "patentee", label: "专利权人", width: "250px" },
  { prop: "industrial_classification", label: "所属产业", width: "207px" },
  { prop: "payment_type", label: "许可类型", width: "200px" },
  { prop: "valid_period", label: "单次许可期限", width: "200px" },
  { prop: "license_scope", label: "单次许可范围", width: "200px" },
];

const fetchData = async () => {
  const res = await apiClient.post("/ipr/patent/platform/list_patent", {
    currentPage: 1,
    patent_type: 0,
    source_type: 0,
    payment_type: 0,
    industrial_classification: 0,
  });

  resData.value = res.data.data.list;
};
onMounted(() => {
  fetchData();
});
const goToDetail = (row) => {
  store.state.patentData = row;
  router.push("/detail");
};
</script>
<style scoped>
.card {
  width: 100%;
  background: url("@/assets/card-bg.png") no-repeat center center;
  background-size: contain;
  display: flex;
  flex-direction: column; /* 改为垂直方向排列 */
  justify-content: center;
  align-items: center;

  min-height: 230px; /* 设置最小高度 */
  min-width: 230px; /* 设置最小宽度 */
}
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
</style>
