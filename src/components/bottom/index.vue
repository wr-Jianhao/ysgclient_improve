<template>
  <el-row :justify="'center'">
    <el-col
      v-for="item in bottomList"
      :key="item.name"
      style="
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      "
      :span="5"
    >
      <el-image
        :src="item.icon.name"
        style="width: 100px; height: 100px; margin-right: 10px"
      >
      </el-image>
      <div style="text-align: left">
        <p
          style="
            font-size: 24px;
            font-family: SourceHanSansCN;
            line-height: 10px;
            margin-top: 5px;
            color: rgba(119, 128, 161, 1);
          "
        >
          {{ item.title }}
        </p>
        <span
          style="
            font-size: 16px;
            font-family: SourceHanSansCN;
            line-height: 10px;
            margin-top: 5px;
            color: rgba(119, 128, 161, 1);
          "
          >{{ item.detail }}
        </span>
      </div>
    </el-col>
  </el-row>
  <div
    style="
      width: 100%;
      background: linear-gradient(
        270deg,
        rgba(3, 0, 94, 0.55) 0%,
        rgba(65, 25, 158, 1) 100%
      );
    "
  >
    <el-row :gutter="10" justify="center" style="width: 80%; margin: 0 auto">
      <el-col :span="4">
        <p class="bottom-title">联系电话</p>
        <div class="bottom-box">
          <p class="bottom-detail">0878-3115517</p>
          <p class="bottom-detail">客服邮箱</p>
          <p class="bottom-detail">service@ynipp.cn</p>
        </div>
      </el-col>
      <el-col :span="5" style="text-align: center">
        <p class="bottom-title">账号安全</p>
        <div class="bottom-box">
          <p class="bottom-detail">实名认证</p>
        </div>
      </el-col>
      <el-col :span="5" style="text-align: center">
        <p class="bottom-title">交易安全</p>
        <div class="bottom-box">
          <p class="bottom-detail">合作流程</p>
          <p class="bottom-detail">急速反馈</p>
        </div>
      </el-col>
      <el-col :span="5" style="text-align: center">
        <p class="bottom-title">帮助中心</p>
        <div class="bottom-box">
          <p class="bottom-detail">服务协议</p>
          <p class="bottom-detail">交易须知</p>
          <p class="bottom-detail">资料往来说明</p>
        </div>
      </el-col>
      <el-col :span="5" style="text-align: center">
        <p class="bottom-title">关于我们</p>
        <div class="bottom-box">
          <p class="bottom-detail">关于彝时光</p>
          <p class="bottom-detail">联系我们</p>
          <p class="bottom-detail">商务合作</p>
          <p class="bottom-detail">在线客服</p>
        </div>
      </el-col>
    </el-row>
    <hr
      style="
        width: 80%;
        margin: 0 auto;
        border: none; /* 去掉默认边框 */
        height: 2px; /* 设置高度 */
        background-color: rgba(150, 150, 150, 1);
        margin: 10px auto;
      "
    />
    <el-row :gutter="10" justify="center" style="width: 80%; margin: 0 auto">
      <el-col :span="6">
        <p class="bottom-detail">相关友链</p>
      </el-col>
      <el-col :span="6">
        <p class="bottom-detail">彝时光</p>
      </el-col>
      <el-col :span="6">
        <p class="bottom-detail">楚雄高新区创新创业中心</p>
      </el-col>
    </el-row>
    <hr
      style="
        width: 80%;
        margin: 0 auto;
        border: none; /* 去掉默认边框 */
        height: 2px; /* 设置高度 */
        background-color: rgba(150, 150, 150, 1);
        margin: 10px auto;
      "
    />
    <el-row :gutter="10" justify="center" style="width: 80%; margin: 0 auto">
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          margin-top: 10px;
        "
      >
        <p class="bottom-detail">楚雄总部</p>
        <p class="bottom-detail">昆明市</p>
        <p class="bottom-detail">元谋县</p>
        <p class="bottom-detail">大姚县</p>
        <p class="bottom-detail">姚安县</p>
        <p class="bottom-detail">双柏县</p>
        <p class="bottom-detail">禄丰市</p>
        <p class="bottom-detail">永仁县</p>
        <p class="bottom-detail">武定县</p>
        <p class="bottom-detail">牟定县</p>
        <p class="bottom-detail">南华县</p>
      </div>
    </el-row>
    <el-row :gutter="10">
      <p class="bottom-detail" style="text-align: center; margin: 10px auto">
        Copyright © 2019-2024
        楚雄高新领创科技有限公司（高新区直属国企单位，平台原属楚雄高新技术产业开发区科技创新中心）版权所有
      </p>
    </el-row>
  </div>
</template>
<script setup>
import { getBottomData } from "./utils/data";
import { ref } from "vue";
const data = getBottomData();

const images = import.meta.glob("@/assets/*.png");

const bottomList = ref(
  data.bottomList.map((item) => {
    const imgKey = `/src/assets/${item.icon}`;

    return { ...item, icon: images[imgKey] };
  }),
);
</script>
<style scoped>
.bottom-title {
  font-size: 16.87px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24.43px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
}
.bottom-detail {
  font-size: 13.5px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 18.52px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
  padding: 0;
  margin-top: 2px;
  margin-bottom: 4px;
}
.bottom-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  padding: 0;
}
</style>
