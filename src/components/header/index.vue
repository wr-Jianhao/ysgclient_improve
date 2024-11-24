<script>
// 确保路径正确
import apiClient from "@/utils/request";
import headLogo from "@/assets/headLogo.png";
import { getHeaderData } from "./utils/data";
import { mapState } from "vuex";
import store from "@/store";
import router from "@/router";

const headerList = getHeaderData().headerList;
export default {
  name: "HeaderBar",

  data() {
    return {
      headLogo: headLogo,
      headerList: headerList,
    };
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIn,
      userInfo: (state) => state.userInfo,
    }),
  },
  methods: {
    loginOrRegister() {
      this.$router.push("/login");
    },
    handleLinkClick(path) {
      this.$router.push(path);
    },
    watch: {
      isLoggedIn(newValue) {
        console.log("isLoggedIn 状态更新:", newValue);
      },
      userInfo(newValue) {
        console.log("userInfo 状态更新:", newValue);
      },
    },
    async logout() {
      await apiClient.post("/ipr/auth/logout/web");
      store.commit("SET_USER_STATE", false);
      router.push("/home");
    },
  },
};
</script>
<template>
  <el-row :justify="'center'" style="background-color: rgba(91, 104, 207, 1)">
    <el-col :span="4" class="first-row">
      <el-image
        style="
          width: 267px;
          height: 52px;
          position: absolute;
          left: 70px;
          top: 16px;
        "
        :src="headLogo"
      />
    </el-col>
    <el-col :span="16" class="first-row">
      <span v-for="item in headerList" :key="item.name" class="header-item">
        <el-link
          target="_blank"
          :underline="false"
          @click="handleLinkClick(item.link)"
        >
          <p
            style="font-size: 18px; font-family: SourceHanSansCN; color: white"
          >
            {{ item.name }}
          </p>
        </el-link>
      </span>
    </el-col>
    <el-col :span="4" class="first-row">
      <el-button
        v-if="!isLoggedIn"
        style="background-color: rgba(91, 104, 207, 1); border: none"
        @click="loginOrRegister"
      >
        <p style="font-size: 18px; font-family: SourceHanSansCN; color: white">
          登录/注册
        </p>
      </el-button>
      <p
        v-else
        style="font-size: 18px; font-family: SourceHanSansCN; color: white"
      >
        {{ userInfo.username }}
        <el-button @click="logout"> 登出 </el-button>
      </p>
    </el-col>
  </el-row>
</template>
<style scoped>
.first-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 100px;
}

.header-item {
  display: block;
  margin-right: 20px;
  width: 200px;
  line-height: 15px;
  color: #7780a1;
}
</style>
