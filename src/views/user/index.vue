<template>
  <div style="background: rgba(240, 242, 245, 1); height: 100vh">
    <HeaderBar />
    <p
      style="
        color: white;
        font-size: 24px;
        margin-top: 50px;
        text-align: center;
        color: black;
      "
    >
      知识产权服务商运营管理中心
    </p>

    <div class="box">
      <p class="title">请选择服务商主体</p>
      <hr style="width: 96%; color: black" />
      <p class="sub-title" style="margin-left: 20px">直接管理的企业</p>
      <div
        v-for="item in accountEnterpriseInfo"
        :key="item"
        style="
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          text-align: center;
          background: rgba(8, 0, 94, 0.14);
        "
      >
        <p
          style="
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 26.06px;
            color: rgba(0, 0, 0, 1);
            text-align: left;
            vertical-align: top;
          "
        >
          {{ item.name }}
        </p>
        <el-button
          style="margin-right: 20px"
          @click="gotoUsePage('enterprise')"
        >
          选择
        </el-button>
      </div>
    </div>
    <div class="box">
      <p class="title">使用个人账户</p>
      <hr style="width: 96%; color: black" />
      <div
        v-for="item in accountEnterpriseInfo"
        :key="item"
        style="
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          text-align: center;
          background: rgba(8, 0, 94, 0.14);
        "
      >
        <p
          style="
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 26.06px;
            color: rgba(0, 0, 0, 1);
            text-align: left;
            vertical-align: top;
          "
        >
          {{ item.name }}
        </p>
        <el-button
          style="margin-right: 20px"
          @click="gotoUsePage('enterprise')"
        >
          选择
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import HeaderBar from "@/components/Header/index.vue";
import store from "@/store";
import router from "@/router";
import apiClient from "@/utils/request";

const accountEnterpriseInfo = ref(null);
const accountUserInfo = ref(null);

const getCompanyInfo = async () => {
  const request = await apiClient.get("/ipr/connect/institution/findMyCompany");
  console.log(request.data.data);
  accountEnterpriseInfo.value = request.data.data;
};
const getUserInfo = async () => {
  const request = await apiClient.get(
    "/ipr/connect/individual/currentUserInfo",
  );
  accountUserInfo.value = request.data.data;
  store.commit("SET_USER_INFO", accountUserInfo.value);
};
const gotoUsePage = async (category) => {
  store.state.isChoose = true;
  if (category === "enterprise") {
    const request = await apiClient
      .post("/ipr/connect/institution/access/main", {
        eid: "15",
      })
      .then((request) => {
        router.push("/user/center");
      });
  } else {
    const request = await apiClient
      .post("/ipr/connect/individual/access", {
        eid: "15",
      })
      .then((request) => {
        router.push("/user/center");
      });
  }
};

onMounted(() => {
  getCompanyInfo();
  getUserInfo();
});
</script>
<style scoped>
.title {
  font-size: 27px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 39.1px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  margin-left: 20px;
  vertical-align: top;
}
.sub-title {
  font-size: 20.25px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 29.32px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.box {
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 14.63px;
  background: rgba(255, 255, 255, 1);
  border: 1.13px solid rgba(193, 151, 222, 1);
  margin-top: 20px;
}
</style>
