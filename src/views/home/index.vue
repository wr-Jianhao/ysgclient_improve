<script setup>
import HeaderBar from "@/components/header/index.vue";
import BottomBar from "@/components/bottom/index.vue";
import { getData } from "./utils/data";
import { ref } from "vue";

const images = import.meta.glob("@/assets/*"); // 立即获取所有图片

const data = getData();
const featureList = ref(
  data.featureList.map((item) => {
    const imgKey = `/src/assets/${item.icon}`;
    return { ...item, icon: images[imgKey] }; // .default 是图像的路径
  }),
);
console.log(featureList.value);
const chooseImgList = ref(
  data.chooseImgList.map((item) => {
    const imgKey = `/src/assets/${item.name}`;

    return { ...item, name: images[imgKey] }; // .default 是图像的路径
  }),
);
const recommendList = ref(
  data.recommendList.map((item) => {
    const imgKey = `/src/assets/${item.background}`;

    return { ...item, background: images[imgKey] }; // .default 是图像的路径
  }),
);
const casualList = ref(
  data.casualList.map((item) => {
    const imgKey = `/src/assets/${item.src}`;

    return { src: images[imgKey] }; // .default 是图像的路径
  }),
);
const serviceCityList = ref(data.serviceCityList);
</script>
<template>
  <div class="flex-col page">
    <HeaderBar />
    <div class="background">
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          margin: 10px auto;
          width: 1280px;
        "
      >
        <el-carousel
          style="width: 800px; margin: 0 auto; height: 320px"
          indicator-position="none"
        >
          <el-carousel-item
            v-for="item in casualList"
            :key="item.src"
            style="height: 320px"
          >
            <el-image
              style="width: 100%; height: 100%"
              :src="item.src.name"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
        <div style="display: flex; flex-direction: column">
          <div class="casu-div" style="margin-left: 10px">
            <div
              style="
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
              "
            >
              <p
                style="
                  font-size: 20px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 5px;
                  color: rgba(0, 0, 0, 1);
                  text-align: left;
                  vertical-align: top;
                  width: 100px;
                  margin-left: 20px;
                "
              >
                信息共享
              </p>
              <p
                style="
                  font-size: 16px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 5px;
                  color: rgba(0, 0, 0, 1);

                  width: 100px;
                  margin-right: 20px;
                "
              >
                查看更多
              </p>
            </div>

            <hr style="margin-top: 5px" />
            <div
              style="
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: 5px;
              "
            >
              <el-button class="casu-button">新闻</el-button>
              <el-button class="casu-button">新闻</el-button>
              <el-button class="casu-button">新闻</el-button>
            </div>
            <div
              v-for="item in 3"
              :key="item"
              class="casu-info"
              :style="{
                backgroundColor:
                  item % 2 === 0 ? ' white' : ' rgba(245, 246, 255, 1)',
              }"
            >
              <p>羿蜗科技: 202{{ item }}年度新品发布会</p>
            </div>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              margin: 0 auto;
              justify-content: space-around; /* 或者使用 space-between */
              align-items: center;
              text-align: center;
              width: 100%; /* 确保父容器占满宽度 */
            "
          >
            <div class="static-div">
              <span class="static-title">浏览量</span>
              <span class="static-detail">3000</span>
            </div>
            <div class="static-div">
              <span class="static-title">服务企业</span>
              <span class="static-detail">525</span>
            </div>
            <div class="static-div">
              <span class="static-title">服务咨询量</span>
              <span class="static-detail">1000</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          display: flex;
          flex-direction: row;
          width: 1280px;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
        "
      >
        <el-input
          v-model="searchQuery"
          placeholder="请输入搜索内容"
          class="input-search"
        ></el-input>
        <el-button class="search-button" @click="handleSearch">搜索</el-button>
      </div>
      <el-row :justify="'center'" style="width: 1334px; margin: 0 auto">
        <div
          v-for="item in recommendList"
          :key="item.name"
          class="recommend-item"
          :style="{
            background:
              'url(' + item.background.name + ') no-repeat center center',
            backgroundSize: 'cover',
          }"
        >
          <div
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              text-align: left;
              color: white;
            "
          >
            <p
              style="
                font-size: 24px;
                font-family: SourceHanSansCN;
                line-height: 15px;
                margin-top: 20px;
                cursor: pointer;
              "
            >
              {{ item.name }}
            </p>
            <p
              style="
                font-size: 16px;
                font-family: SourceHanSansCN;
                line-height: 15px;
                margin-top: 10px;
                width: 180px;
                cursor: pointer;
              "
            >
              {{ item.detail }}
            </p>
          </div>
        </div>
      </el-row>
      <el-row :justify="'center'" style="width: 100%">
        <el-col>
          <div style="text-align: center; margin-top: 20px">
            <p
              style="
                font-size: 24px;
                font-family: SourceHanSansCN;
                line-height: 15px;
                margin-top: 20px;
                color: rgba(172, 128, 209, 1);
              "
            >
              为什么选择彝时光
            </p>
            <p
              style="
                font-size: 16px;
                font-family: SourceHanSansCN;
                line-height: 15px;
                margin-top: 10px;
                color: rgba(119, 128, 161, 1);
              "
            >
              政企协作运营，打造一站式知产服务，只为让您安心、省心更放心
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row :justify="'center'" :gutter="20" style="width: 100%">
        <el-col :span="6">
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              height: 700px;
              opacity: 1;
              border-radius: 20px;
              background: linear-gradient(
                  206.57deg,
                  rgba(255, 255, 255, 0.1) 0%,
                  rgba(255, 255, 255, 0) 100%
                ),
                rgba(240, 242, 245, 1);
              border: 0.6px solid rgba(91, 104, 207, 1);
            "
          >
            <div
              style="
                width: 400px;
                height: 100px;
                display: flex;
                justify-content: center;
                float: left;
                flex-direction: column;
                margin-top: 70px;
                align-items: center;
              "
            >
              <p
                style="
                  font-size: 24px;
                  font-family: SourceHanSansCN;
                  line-height: 15px;
                  margin-top: 20px;
                  color: rgba(91, 104, 207, 1);
                "
              >
                中心地址
              </p>
              <p
                style="
                  font-size: 20px;
                  font-family: SourceHanSansCN;
                  line-height: 15px;
                  margin-top: 20px;
                  color: rgba(119, 128, 161, 1);
                "
              >
                楚雄国家高新区
              </p>
            </div>
            <div
              style="
                width: 400px;
                height: 200px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
              "
            >
              <p
                style="
                  font-size: 24px;
                  font-family: SourceHanSansCN;
                  line-height: 15px;
                  margin-top: 20px;
                  color: rgba(91, 104, 207, 1);
                "
              >
                服务城市
              </p>
              <div
                style="
                  display: grid;
                  grid-template-columns: repeat(5, 70px);
                  gap: 10px;
                  margin-top: 20px;
                "
              >
                <span
                  v-for="item in serviceCityList"
                  :key="item.name"
                  style="
                    width: 60px;
                    height: 40px;
                    float: right;

                    color: rgba(119, 128, 161, 1);
                    border: 0;
                    border-radius: 10px;
                  "
                >
                  {{ item.name }}
                </span>
              </div>
            </div>
            <div style="margin-top: 200px">
              <p
                style="
                  font-size: 24px;
                  font-family: SourceHanSansCN;
                  line-height: 15px;
                  margin-top: 20px;
                  color: rgba(91, 104, 207, 1);
                "
              >
                彝时光布局更多服务区
              </p>
              <p
                style="
                  font-size: 16px;
                  font-family: SourceHanSansCN;
                  line-height: 15px;
                  margin-top: 20px;
                  color: rgba(119, 128, 161, 1);
                "
              >
                更多区域正在筹备建设中
              </p>
            </div>
            <el-button
              type="primary"
              style="width: 150px; height: 40px; margin-bottom: 20px"
              >了解更多</el-button
            >
          </div>
        </el-col>
        <el-col :span="14">
          <div
            style="
              width: 1000px;
              height: 700px;
              opacity: 1;
              border-radius: 12px;
              background: rgba(240, 242, 245, 1);
              display: flex;
              flex-direction: column;
              border: 0.6px solid rgba(91, 104, 207, 1);
            "
          >
            <div style="width: 100%">
              <p
                style="
                  font-size: 24px;
                  font-family: SourceHanSansCN;
                  line-height: 15px;
                  margin-top: 20px;
                  color: rgba(91, 104, 207, 1);
                  text-align: center;
                "
              >
                楚雄高新区创新创业中心
              </p>
              <p
                style="
                  font-size: 16px;
                  font-family: SourceHanSansCN;
                  line-height: 15px;
                  margin-top: 20px;
                  color: rgba(119, 128, 161, 1);
                  text-align: center;
                "
              >
                政企协作运营，知识产权综合服务平台，为您提供商标转让、版权转让一站式服务
              </p>
            </div>
            <div
              style="
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin: 0 auto;
              "
            >
              <div
                v-for="item in featureList"
                :key="item.name"
                style="
                  width: 40%;
                  margin: 0 auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <el-image
                  style="
                    width: 200px;

                    margin-top: 10px;
                    border-radius: 20px;
                    background-color: #7780a1;
                  "
                  :src="item.icon.name"
                />
                <div style="margin-left: 40px">
                  <p
                    style="
                      font-size: 24px;
                      font-family: SourceHanSansCN;
                      line-height: 15px;
                      margin-top: 20px;
                      color: rgba(91, 104, 207, 1);
                    "
                  >
                    {{ item.name }}
                  </p>
                  <p
                    style="
                      font-size: 16px;
                      font-family: SourceHanSansCN;
                      line-height: 15px;
                      margin-top: 20px;
                      color: rgba(119, 128, 161, 1);
                    "
                  >
                    {{ item.detail }}
                  </p>
                </div>
              </div>
            </div>
            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
              "
            >
              <div
                v-for="item in chooseImgList"
                :key="item.name"
                style="margin: 10px 10px; text-align: center"
              >
                <el-image
                  :src="item.name.name"
                  :fit="fit"
                  style="border-radius: 10.2px; margin: 20px auto"
                ></el-image>
                <p
                  style="
                    font-size: 20px;
                    font-weight: 400;
                    letter-spacing: 0.12px;
                    line-height: 13.9px;
                    color: rgba(91, 104, 207, 1);
                    text-align: center;
                    vertical-align: top;
                  "
                >
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <BottomBar />
    </div>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  margin-top: 0;
  height: auto;
}
.background {
  background: url("@/assets/home_bg.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.input-search {
  margin-top: 20px;
  width: 1200px;
  height: 50px;
  margin-right: 10px;
  border-radius: 13px;

  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 15px 45px rgba(6, 7, 20, 0.1);
}

.search-button {
  background: linear-gradient(
    153.43deg,
    rgba(71, 69, 208, 1) 0%,
    rgba(42, 39, 201, 1) 100%
  );
  color: white;
  margin-top: 20px;
  height: 50px;
  width: 200px;
  font-size: 17px;
}
.casu-div {
  width: 450px;
  height: 265px;
  margin: 20px auto;
  text-align: center;

  border-radius: 13px;
  background: rgba(255, 255, 255, 1);
}
.casu-button {
  border: 0.9px solid rgba(166, 166, 166, 1);
  margin: 0 auto;

  border-radius: 3.6px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.casu-info {
  background: rgba(245, 246, 255, 1);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.static-div {
  background: url("@/assets/static.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
}
.static-title {
  font-size: 20px;
}
.static-detail {
  font-size: 16px;
}
.recommend-item {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 180px;

  margin: 30px auto;
  border-radius: 20px;
  position: relative; /* 确保内部绝对定位元素正确定位 */
}
</style>
