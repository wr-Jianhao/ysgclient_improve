<template>
  <div style="background-color: rgba(240, 242, 245, 1)">
    <HeaderBar />
    <div
      style="
        width: 1200px;
        margin: 10px auto;
        border-radius: 9.75px;
        height: 300px;
        border: 2px solid rgba(91, 104, 207, 1);
        flex-direction: row;
        display: flex;
      "
    >
      <div
        style="
          width: 300px;
          height: 100%;
          display: flex;
          flex-direction: column;

          align-items: center;
        "
      >
        <el-image
          style="
            width: 270px;
            height: 200px;
            margin-left: 10px;
            margin-top: 20px;
          "
          :src="url"
          :fit="fit"
        ></el-image>
        <el-button
          style="
            margin: 10px auto;
            color: white;
            background: rgba(172, 51, 193, 1);
            box-shadow:
              inset -2.7px -2.7px 2.7px rgba(0, 0, 0, 0.1),
              inset 2.7px 2.7px 2.7px rgba(255, 255, 255, 0.1);
          "
          >提交许可意向</el-button
        >
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          width: 900px;
        "
      >
        <span
          style="
            font-size: 19.5px;
            font-weight: 400;
            letter-spacing: 2.03px;
            line-height: 28.24px;
            color: rgba(0, 0, 0, 1);
            text-align: left;
            vertical-align: top;
          "
          >{{ patentData.patent_name }}</span
        >
        <span
          style="
            font-size: 11px;
            font-weight: 400;
            letter-spacing: 1.5px;
            line-height: 15.93px;
            color: rgba(0, 0, 0, 0.49);
            text-align: left;
            vertical-align: top;
          "
          >产业分类{{ patentData.industrial_classification }}</span
        >
        <p
          style="
            width: 100%;
            opacity: 1;
            background: rgba(245, 246, 255, 1);
            margin-bottom: 0;
          "
        >
          许可支付类型
          <span style="font-size: 17px; color: rgba(172, 51, 193, 1)">
            {{ patentData.payment_type }}
          </span>
        </p>
        <div
          style="
            width: 900px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 10px;
          "
        >
          <span style="width: 400px" class="detail-item">
            专利申请号：{{ patentData.publication_num }}
          </span>
          <span style="width: 400px" class="detail-item">
            专利申请日：{{ patentData.application_date }}
          </span>
          <span style="width: 400px" class="detail-item">
            授权公告日：{{ patentData.authorization_date }}
          </span>
          <span style="width: 400px" class="detail-item">
            专利权人：{{ patentData.patentee }}
          </span>
          <span style="width: 400px" class="detail-item">
            专利类型：{{ patentData.patent_type }}
          </span>
          <span style="width: 400px" class="detail-item">权利状态：有效</span>
          <span style="width: 400px" class="detail-item">
            发明人：{{ patentData.inventor }}
          </span>
          <span style="width: 400px" class="detail-item">专利评分：60</span>
        </div>
      </div>
    </div>

    <div class="bar">
      <p style="margin: 10px auto" class="title">开放许可信息</p>
      <hr style="width: 90%" />
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        "
      >
        <span>单次许可期限</span>
        <span>单次许可范围</span>
        <span>单次许可费用</span>
      </div>
      <hr style="width: 90%" />
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        "
      >
        <span>到期时间</span>
        <span>许可类型</span>
        <span>商品类型</span>
      </div>
      <hr style="width: 90%" />
      <p style="margin: 10px auto" class="title">开放许可声明</p>
      <hr style="width: 90%" />
    </div>
    <div class="bar" style="height: auto; background-color: white">
      <p style="margin: 10px auto" class="title">专利信息</p>
      <hr style="width: 90%" />

      <div
        v-html="patentDetail"
        :style="{
          textAlign: 'left',
          width: '90%',
          margin: '10px auto',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }"
      ></div>
    </div>
    <BottomBar />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import apiClient from "@/utils/request";
import store from "@/store/index";
import BottomBar from "@/components/bottom/index.vue";
import HeaderBar from "@/components/header/index.vue";

const patentData = ref({});

const resData = ref({}); // 专利详情数据
const patentDetail = ref({}); // 专利详情html
const getPatentDetail = async () => {
  const res = await apiClient.post("/ipr/patent/platform/detail_patent", {
    patentId: store.state.patentData.patent_id,
  });
  resData.value = res.data.data;
  patentDetail.value = res.data.data.detail;
};

onMounted(() => {
  patentData.value = store.state.patentData;
  if (patentData) {
    getPatentDetail();
  } else {
    router.push("/patent");
  }
});
</script>
<style scoped>
.detail-item {
  width: 400px;
  margin: 10px auto;
}
.title {
  font-size: 19.5px;
  font-weight: 500;
  letter-spacing: 2.03px;
  line-height: 28.24px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
}
.tabs {
  width: 90%;
  margin: 10px auto;
}
.bar {
  width: 1200px;
  margin: 40px auto;
  border-radius: 9.75px;
  height: 300px;
  border: 2px solid rgba(91, 104, 207, 1);
  text-align: center;
}
</style>
