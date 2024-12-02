<template>
  <div style="background-color: rgba(240, 242, 245, 1)">
    <HeaderBar />
    <div
      style="
        border-radius: 9.75px;
        background: rgba(255, 255, 255, 1);
        width: 1200px;
        margin: 20px auto;
        border: 0.75px solid rgba(193, 151, 222, 1);
      "
    >
      <p class="title">专利开放许可发布</p>
      <hr style="width: 80%; margin: 0px auto" />
      <div style="width: 60%; margin: 10px auto">
        <el-row :gutter="10">
          <el-col class="item">
            <p class="label">专利申请号</p>
            <el-input
              placeholder="请输入专利申请号"
              style="width: 60%"
              v-model="publication_num"
            />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="item">
            <p class="label">专利名称</p>
            <el-input
              placeholder="请输入专利名称"
              style="width: 60%"
              v-model="patent_name"
            />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="item">
            <p class="label">专利权人</p>
            <el-input
              placeholder="请输入专利权人"
              style="width: 60%"
              v-model="patent_owner"
            />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="item">
            <p class="label">所属产业</p>
            <el-input
              placeholder="请输入所属产业"
              style="width: 60%"
              v-model="industrial_classification"
            />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="item">
            <p class="label">许可类型</p>
            <el-input
              placeholder="请输入许可类型"
              style="width: 60%"
              v-model="payment_type"
            />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="item">
            <p class="label">单次许可期限</p>
            <el-input
              placeholder="请输入单次许可期限"
              style="width: 60%"
              v-model="valid_period"
            />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="item">
            <p class="label">单次许可范围</p>
            <el-input
              placeholder="请输入单次许可范围"
              style="width: 60%"
              v-model="license_scope"
            />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="item">
            <el-upload
              class="upload-demo"
              action="上传的接口地址"
              :on-change="handleChange"
              :before-upload="beforeUpload"
              :multiple="true"
              :limit="5"
              :on-exceed="handleExceed"
              accept="image/*"
              :file-list="fileList"
            >
              <div class="upload-box">
                <p>上传图片</p>
                <p>拖拽文件到这里，或点击选择文件</p>
                <p>只能上传图片，且不超过500kb</p>
              </div>
              <!-- <div slot="tip" class="el-upload__tip">
                只能上传图片，且不超过500kb
              </div> -->
            </el-upload>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :gutter="10" class="item" style="justify-content: center">
            <el-button class="submit-btn">保存</el-button>
            <el-button class="submit-btn" @click="handlePublish"
              >发布</el-button
            >
          </el-col>
        </el-row>
      </div>
    </div>
    <BottomBar />
  </div>
</template>
<script setup>
import HeaderBar from "@/components/header/index.vue";
import BottomBar from "@/components/bottom/index.vue";
import apiClient from "@/utils/request";
import { ref } from "vue";
const publication_num = ref(null);
const patent_name = ref(null);
const patent_owner = ref(null);
const industrial_classification = ref(null);
const payment_type = ref(null);
const valid_period = ref(null);
const license_scope = ref(null);
const fileList = ref([]);

const handlePublish = async () => {
  const request = await apiClient.post("/ipr/patent/platform/publish_patent", {
    publication_num: publication_num.value,
    patent_name: patent_name.value,
    patentee: patent_owner.value,
    industrial_classification: industrial_classification.value,
    payment_type: payment_type.value,
    valid_period: valid_period.value,
    license_scope: license_scope.value,
    fileList: fileList.value,
  });
  if (request.data.status != 0) {
    alert("提交成功");
    router.push("/patent");
  }
  console.log("发布");
};

//上传图片相关函数
const handleChange = (file, fileList) => {
  // 更新 fileList
  fileList.value = fileList;
};
const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    this.$message.error("只能上传图片文件！");
  }
  const isLt2M = file.size / 1024 / 1024 < 0.5; // 0.5M
  if (!isLt2M) {
    this.$message.error("上传图片大小不能超过 500KB!");
  }
  return isImage && isLt2M;
};

const handleExceed = (files, fileList) => {
  this.$message.warning(`当前限制选择 5 个文件，已选择 ${files.length} 个文件`);
};
</script>
<style scoped>
.title {
  font-size: 27px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 39.1px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  margin: 10px auto;
}
.label {
  width: 100px;
  margin: 0 auto;
  text-align: left;
}
.item {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 10px auto;
}
.submit-btn {
  width: 100px;
  border-radius: 9.75px;
  background: rgba(172, 51, 193, 1);
  box-shadow:
    inset -2.7px -2.7px 2.7px rgba(0, 0, 0, 0.1),
    inset 2.7px 2.7px 2.7px rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10.8px 16.2px 10.8px 16.2px;
  color: white;
  margin-left: 20px;
}

.upload-demo {
  width: 100%; /* 设置宽度 */
  text-align: center;
}

.upload-box {
  border: 2px dashed #409eff; /* 方框的边框样式 */
  border-radius: 5px; /* 圆角边框 */
  padding: 30px; /* 内边距 */
  text-align: center; /* 文本水平居中 */
  cursor: pointer; /* 鼠标悬停为指针 */
  transition: border-color 0.3s; /* 边框颜色变化过渡 */
}

.upload-box:hover {
  border-color: #66b1ff; /* 鼠标悬停时改变边框颜色 */
}

/* 显示已上传文件的样式 */
.el-upload-list {
  margin-top: 10px; /* 上方留出空间 */
}

.el-upload-list__item {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
  margin: 5px 0; /* 块间距 */
}

.el-upload-list__item img {
  width: 50px; /* 图片宽度 */
  height: 50px; /* 图片高度 */
  margin-right: 10px; /* 图片和文本之间的间距 */
}
</style>
