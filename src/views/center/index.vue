<template>
  <div style="background: rgba(240, 242, 245, 1); height: auto">
    <HeaderBar />
    <el-row :justify="'center'" :gutter="5" style="margin-top: 20px">
      <el-col :span="4">
        <div
          style="
            background: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(193, 151, 222, 1);
            border-radius: 11.79px;
            height: 70vh;
          "
        >
          <p class="title">会员中心</p>
          <div v-if="store.state.isLoggedIn">
            <p class="title" style="font-size: 16px">
              {{ userInfo.username }}
            </p>
          </div>
          <el-collapse
            v-model="activeName"
            style="--el-collapse-border-color: none"
            class="collapse-container"
            accordion="true"
            @change="collapseChange"
          >
            <el-collapse-item name="3">
              <template #title>
                <span class="title-text"> 业务订单 </span>
              </template>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getOrderList('standard')"
                >
                  <p class="left-font">普通订单</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getOrderList('safeguard')"
                >
                  <p class="left-font">维权订单</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getOrderList('analysis')"
                >
                  <p class="left-font">分析订单</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getOrderList('demand')"
                >
                  <p class="left-font">需求订单</p>
                </el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item name="4">
              <template #title>
                <span class="title-text">交易订单</span>
              </template>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMarketList('trademark')"
                >
                  <p class="left-font">商标交易订单</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMarketList('patent')"
                >
                  <p class="left-font">专利交易订单</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMarketList('copyright')"
                >
                  <p class="left-font">版权交易订单</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMarketList('software')"
                >
                  <p class="left-font">软著交易订单</p>
                </el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item name="5">
              <template #title>
                <span class="title-text"> 我的出售 </span>
              </template>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMineOrderList('trademark')"
                >
                  <p class="left-font">出售商标</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMineOrderList('patent')"
                >
                  <p class="left-font">出售专利</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMineOrderList('copyright')"
                >
                  <p class="left-font">出售版权</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMineOrderList('software')"
                >
                  <p class="left-font">出售软著</p>
                </el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item name="6">
              <template #title>
                <span class="title-text"> 我的发布 </span>
              </template>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMinePublishList('demand')"
                >
                  <p class="left-font">发布需求</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMinePublishList('analysis')"
                >
                  <p class="left-font">发布分析</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMinePublishList('safeguard')"
                >
                  <p class="left-font">发布维权</p>
                </el-link>
              </div>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMinePublishList('QA')"
                >
                  <p class="left-font">发布问答</p>
                </el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item name="7">
              <template #title>
                <span class="title-text">我的关注</span>
              </template>
              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMineFollowList('service')"
                >
                  <p class="left-font">服务项目</p>
                </el-link>
              </div>

              <div>
                <el-link
                  class="collapse-link"
                  :underline="false"
                  @click="getMineFollowList('agency')"
                >
                  <p class="left-font">代理机构</p>
                </el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item name="8">
              <template #title>
                <span class="title-text">账户管理</span>
              </template>
              <div>
                <el-link class="collapse-link" :underline="false">
                  <p class="left-font">账号信息</p>
                </el-link>
              </div>
              <div>
                <el-link class="collapse-link" :underline="false">
                  <p class="left-font">认证信息</p>
                </el-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
      <el-col :span="18">
        <div
          style="
            height: 70vh;
            background: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(193, 151, 222, 1);
            border-radius: 11.79px;
          "
        >
          <div style="display: flex; justify-content: space-between">
            <div style="margin: 0 auto">
              <p class="title" style="width: 100%">
                {{ titleName }}
              </p>
            </div>

            <div
              v-if="store.state.isLoggedIn && !showTable"
              style="margin-right: 10px"
            >
              <el-button
                type="primary"
                style="margin-top: 10px"
                @click="switchUser"
              >
                切换主体
              </el-button>
              <el-button type="primary" style="margin-top: 10px" @click="logout"
                >退出登录
              </el-button>
            </div>
            <div v-else-if="!store.state.isLoggedIn" style="margin-right: 10px">
              <el-button
                type="primary"
                style="margin-top: 10px"
                @click="router.push('/login')"
                >登录
              </el-button>
            </div>
            <div
              v-else-if="store.state.isLoggedIn && showTable && isPublish"
              style="margin-right: 10px"
            >
              <el-button
                type="primary"
                style="margin-top: 10px"
                @click="router.push('/publish')"
              >
                发布
              </el-button>
            </div>
          </div>
          <hr style="width: 90%; margin: 10px auto" />
          <div
            v-if="activeName.length > 0 && showTable"
            style="margin: 10px auto"
          >
            <el-table
              :data="tableData"
              style="margin: 10px auto; width: 90%"
              border
            >
              <el-table-column
                v-for="(column, index) in columns"
                :key="index"
                :prop="column.key"
                :label="column.title"
                :align="column.align"
                :width="calculateColumnWidth(column.length)"
              >
              </el-table-column>
            </el-table>
          </div>
          <div
            v-else-if="!showTable"
            style="
              margin: 10px auto;
              width: 90%;
              display: flex;
              flex-direction: row;
            "
          >
            <div class="index-content">
              <p class="card-font">待处理订单</p>
              <p class="card-font" style="margin-top: 10px; font-weight: 700">
                12
              </p>
            </div>
            <div class="index-content">
              <p class="card-font">代理机构代办项目</p>
              <p class="card-font" style="margin-top: 10px; font-weight: 700">
                21
              </p>
            </div>
            <div class="index-content">
              <p class="card-font">知产发布</p>
              <p class="card-font" style="margin-top: 10px; font-weight: 700">
                13
              </p>
            </div>
            <div class="index-content">
              <p class="card-font">已完成订单</p>
              <p class="card-font" style="margin-top: 10px; font-weight: 700">
                14
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <BottomBar />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import HeaderBar from "@/components/Header/index.vue";
import BottomBar from "@/components/bottom/index.vue";
import apiClient from "@/utils/request";
import store from "@/store";
import router from "@/router";
const userInfo = store.state.userInfo;
const switchUser = () => {
  store.state.isChoose = false;
  router.push("/user");
};
const logout = async () => {
  await apiClient.post("/ipr/auth/logout/web");
  store.commit("CLEAR_DATA");

  router.push("/home");
};
const activeName = ref([]);
const tableData = ref([]);
</script>
<style scoped>
.title {
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  width: 100%;
  margin: 10px auto;
  padding-top: 3px;
}

.title-text {
  margin: 0 auto;
  font-size: 18px; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
  color: black; /* 字体颜色 */
}
.left-font {
  font-size: 16px;
  margin: 0px auto;
  padding: 0;
  text-align: left;
  margin-left: 50px;
  color: black;
}
.collapse-container {
  margin: 10px auto;
  padding: 0;
  width: 80%; /* 设置宽度为100% */
  background-color: linear-gradient(
    180deg,
    rgba(101, 89, 128, 0.33) 0%,
    rgba(57, 54, 64, 0.24) 63.2%,
    rgba(61, 61, 61, 0) 100%
  ); /* 背景色 */
  border-radius: 5px; /* 圆角边框 */

  padding: 10px; /* 内边距 */
  font-size: 20px; /* 字体大小 */
}
.collapse-container .el-collapse-item {
  margin-bottom: 10px; /* 折叠项之间的间距 */
}

.collapse-container .el-collapse-item__header {
  font-weight: bold; /* 标题加粗 */
  font-size: 16px; /* 字体大小 */
  color: #333; /* 字体颜色 */

  border-radius: 5px;
}
.collapse-container .el-collapse-item__content {
  font-size: 14px; /* 字体大小 */
  color: #666; /* 字体颜色 */

  box-shadow: 0 1px 5px black; /* 阴影效果 */
}

.collapse-container .collapse-link {
  display: block; /* 链接块显示，以便更容易点击 */
  padding: 3px; /* 内边距 */
  color: black; /* 链接颜色 */
  text-decoration: none; /* 去除下划线 */
  transition: color 0.3s ease; /* 添加过渡效果 */
}

.collapse-container .collapse-link:hover {
  color: #0056b3; /* 悬停时的颜色变化 */
}
.index-content {
  width: 23%;
  background-color: #f5f5f5;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin: 10px auto;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 11.25px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.14);
  padding: 0;
  border: 0.42px solid rgba(172, 51, 193, 1);
}
.card-font {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 11px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  padding: 0;
}
</style>
